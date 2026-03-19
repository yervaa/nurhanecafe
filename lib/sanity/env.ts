export const apiVersion = "2025-02-19";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const studioUrl = "/studio";

export const useCdn = process.env.NODE_ENV === "production";

export function hasSanityConfig() {
  return Boolean(projectId && dataset);
}
