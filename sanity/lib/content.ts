import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Doc = Record<string, any>;

// Pages are statically exported, so content is read once at build time.
const reader = createClient({ projectId, dataset, apiVersion, useCdn: false });

/** The fixed-ID (singleton) document of this type, with uploaded files resolved to URLs. */
export async function getDoc(id: string): Promise<Doc> {
  const doc = await reader.fetch(`*[_id == $id][0]`, { id });
  if (!doc) throw new Error(`Sanity document "${id}" not found. Run: node scripts/seed.mjs`);
  return doc;
}

/** URL of an uploaded file asset (video). */
export async function fileUrl(file: any): Promise<string> {
  const ref = file?.asset?._ref;
  if (!ref) return "";
  const url = await reader.fetch<string | null>(`*[_id == $ref][0].url`, { ref });
  return url ?? "";
}

export async function getSiteSettings() {
  const [general, contact, social] = await Promise.all([getDoc("generalSettings"), getDoc("contactSettings"), getDoc("socialSettings")]);
  return { general, contact, social };
}
