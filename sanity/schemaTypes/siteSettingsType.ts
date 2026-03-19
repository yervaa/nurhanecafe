import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "NurHane",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Luxury Cookies, Softly Made",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      initialValue: "nurhanecafe@gmail.com",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location / Fulfillment Note",
      type: "string",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
    }),
    defineField({
      name: "pickupDeliveryNote",
      title: "Pickup / Delivery Note",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "orderSupportText",
      title: "Order Support Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "emailSignupPlaceholder",
      title: "Email Signup Placeholder",
      type: "string",
    }),
    defineField({
      name: "contactPrompts",
      title: "Contact Prompts",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "brandName",
      subtitle: "tagline",
    },
  },
});
