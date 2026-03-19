import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "@/lib/sanity/env";

const builder = createImageUrlBuilder({
  projectId,
  dataset,
});

export function urlForImage(source: Image) {
  return builder.image(source);
}
