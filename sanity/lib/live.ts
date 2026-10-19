import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * How content edited in the Studio reaches the live site.
 *
 * Kaara and Pavani get this from next-sanity 12's defineLive with
 * `fetchOptions: { revalidate: 60 }`. qwerise runs next-sanity 13, where
 * defineLive caches every query forever and dropped that option, so edits
 * only appeared after a redeploy. Here the same behaviour is set directly on
 * each fetch instead:
 *  1. /api/revalidate: instant, when the Sanity webhook fires on publish.
 *  2. REVALIDATE_SECONDS: a time-based safety net that needs no setup. After
 *     this many seconds the next visitor triggers a background refresh.
 */
export const REVALIDATE_SECONDS = 60;

/** Tag on every query so the webhook can expire all content at once. */
export const SANITY_TAG = "sanity";

// useCdn: false so a refresh right after a publish never reads a stale CDN copy.
const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

export function sanityFetch<T>(query: string, params: Record<string, string> = {}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [SANITY_TAG] },
  });
}
