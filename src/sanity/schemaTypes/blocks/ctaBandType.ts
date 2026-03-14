import { ComposeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const ctaBandType = defineType({
  name: "ctaBand",
  title: "CTA Band",
  type: "object",
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "primaryLabel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryHref",
      type: "string",
      description: "Use an internal path like /contact or an absolute URL.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "secondaryLabel",
      type: "string",
    }),
    defineField({
      name: "secondaryHref",
      type: "string",
      description: "Use an internal path like /inventory or an absolute URL.",
    }),
    defineField({
      name: "animation",
      type: "animationSettings",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "CTA Band",
      };
    },
  },
});
