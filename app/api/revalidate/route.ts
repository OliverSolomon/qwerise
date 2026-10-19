import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/sanity/lib/live";

/**
 * Instant cache refresh for Studio edits.
 *
 * A Sanity webhook (sanity.io/manage, API, Webhooks, dataset "production",
 * trigger on create, update and delete) posts here, signed with the same
 * secret as SANITY_REVALIDATE_SECRET. Every publish clears the whole site's
 * cache, so the change shows on the next page load.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response("SANITY_REVALIDATE_SECRET is not set", { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string; _id?: string }>(
      req,
      secret,
      true // wait for the Content Lake to settle so the refetch sees the edit
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    revalidateTag(SANITY_TAG, { expire: 0 });
    revalidatePath("/", "layout");

    return NextResponse.json({
      revalidated: true,
      type: body?._type ?? null,
      id: body?._id ?? null,
      now: Date.now(),
    });
  } catch (err) {
    console.error("[revalidate] webhook failed:", err);
    return new Response("Webhook error", { status: 500 });
  }
}
