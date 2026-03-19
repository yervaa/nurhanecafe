import { fallbackContent } from "@/lib/fallback-content";
import { getSanityClient } from "@/lib/sanity/client";
import { hasSanityConfig } from "@/lib/sanity/env";
import { normalizeSiteContent } from "@/lib/sanity/normalize";
import { siteContentQuery } from "@/lib/sanity/queries";

export async function getSiteContent() {
  if (!hasSanityConfig()) {
    return fallbackContent;
  }

  try {
    const sanityClient = getSanityClient();
    const rawContent = await sanityClient.fetch(siteContentQuery, {}, { next: { revalidate: 60 } });
    return normalizeSiteContent(rawContent);
  } catch {
    return fallbackContent;
  }
}
