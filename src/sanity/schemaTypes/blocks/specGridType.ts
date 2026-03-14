import { DashboardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const specGridType = defineType({
  name: "specGrid",
  title: "Spec Grid",
  type: "object",
  icon: DashboardIcon,
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
      name: "specs",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "spec",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "detail",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "value",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(3).max(6),
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
        subtitle: "Spec Grid",
      };
    },
  },
});
