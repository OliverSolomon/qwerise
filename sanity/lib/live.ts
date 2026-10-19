import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";
import { apiVersion, dataset, projectId } from "../env";

/**
 * How content edited in the Studio reaches the live site (same approach as
 * the Pavani site).
 *
 * `sanityFetch` caches every query until it is told the content changed.
 * Two layers clear that cache, both instant:
 *  1. <SanityLive /> (rendered in app/(site)/layout.tsx): listens to the
 *     Live Content API whenever a visitor has the site open.
 *  2. /api/revalidate: a Sanity webhook fired on every publish, so the
 *     change shows on the next page load even when nobody is on the site.
 *
 * The dataset is public and only published content is shown, so no token is
 * needed here.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client: createClient({ projectId, dataset, apiVersion, useCdn: true }),
});

/** Extra tag on every query so the webhook can expire all content at once. */
export const SANITY_TAG = "sanity";
