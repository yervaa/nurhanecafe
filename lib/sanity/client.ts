import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "@/lib/sanity/env";

export function getSanityClient() {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });
}
