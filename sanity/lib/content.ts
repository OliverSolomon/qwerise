import { sanityFetch, SANITY_TAG } from "./live";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Doc = Record<string, any>;

// Reads go through sanityFetch so they are cached and refreshed on publish (see ./live).
async function read<T>(query: string, params: Record<string, string>): Promise<T> {
  const { data } = await sanityFetch({ query, params, tags: [SANITY_TAG], stega: false });
  return data as T;
}

/** The fixed-ID (singleton) document of this type, with uploaded files resolved to URLs. */
export async function getDoc(id: string): Promise<Doc> {
  const doc = await read<Doc | null>(`*[_id == $id][0]`, { id });
  if (!doc) throw new Error(`Sanity document "${id}" not found. Run: node scripts/seed.mjs`);
  return doc;
}

/** URL of an uploaded file asset (video). */
export async function fileUrl(file: any): Promise<string> {
  const ref = file?.asset?._ref;
  if (!ref) return "";
  const url = await read<string | null>(`*[_id == $ref][0].url`, { ref });
  return url ?? "";
}

export async function getSiteSettings() {
  const [general, contact, social] = await Promise.all([getDoc("generalSettings"), getDoc("contactSettings"), getDoc("socialSettings")]);
  return { general, contact, social };
}
