import { groq } from "next-sanity";

export const siteContentQuery = groq`
{
  "siteSettings": *[_type == "siteSettings"][0],
  "hero": *[_type == "homepageHero"][0],
  "about": *[_type == "aboutSection"][0],
  "products": *[_type == "product"] | order(orderRank asc, _createdAt desc),
  "socialLinks": *[_type == "socialLinks"][0]
}
`;
