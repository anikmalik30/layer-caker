import { ImagesIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryRailType = defineType({
  name: "galleryRail",
  title: "Gallery Rail",
  type: "object",
  icon: ImagesIcon,
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
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
            defineField({
              name: "caption",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(3).max(8),
    }),
    defineField({
      name: "animation",
      type: "animationSettings",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Gallery Rail",
        media: media ?? ImagesIcon,
      };
    },
  },
});
