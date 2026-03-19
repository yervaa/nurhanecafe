import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "Keep flexible for now, for example $6 or From $24 / box.",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      initialValue: "available",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold Out", value: "soldOut" },
          { title: "Coming Soon", value: "comingSoon" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripePaymentLink",
      title: "Stripe Payment Link",
      type: "url",
      description: "Temporary direct checkout link. This can later be replaced by cart logic.",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const document = context.document as { availability?: string } | undefined;

          if (document?.availability === "available" && !value) {
            return "Available products should usually have a Stripe Payment Link.";
          }

          return true;
        }),
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Useful when expanding beyond cookies later.",
      initialValue: "Cookies",
    }),
    defineField({
      name: "servingNote",
      title: "Serving Note",
      type: "string",
    }),
    defineField({
      name: "pickupDeliveryNote",
      title: "Pickup / Delivery Note",
      type: "string",
      description: "Optional product-specific fulfillment note.",
    }),
    defineField({
      name: "orderRank",
      title: "Manual Sort Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 1,
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      availability: "availability",
      media: "image",
    },
    prepare({ title, subtitle, availability, media }) {
      const statusMap: Record<string, string> = {
        available: "Available",
        soldOut: "Sold Out",
        comingSoon: "Coming Soon",
      };

      return {
        title,
        subtitle: [subtitle, statusMap[availability] || availability].filter(Boolean).join(" • "),
        media,
      };
    },
  },
});
