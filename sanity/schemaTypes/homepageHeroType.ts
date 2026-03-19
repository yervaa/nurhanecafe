import { defineField, defineType } from "sanity";

const imageField = defineField({
  name: "gallery",
  title: "Hero Gallery",
  type: "array",
  of: [
    {
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
    },
  ],
  validation: (Rule) => Rule.max(2),
});

export const homepageHeroType = defineType({
  name: "homepageHero",
  title: "Homepage Hero",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      rows: 4,
    }),
    imageField,
  ],
  preview: {
    select: {
      title: "headline",
      subtitle: "eyebrow",
    },
  },
});
