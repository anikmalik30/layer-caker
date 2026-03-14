import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videoHeroType = defineType({
  name: "videoHero",
  title: "Video Hero",
  type: "object",
  icon: PlayIcon,
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
      type: "blockContent",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "Use a direct MP4 or streaming source URL.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "poster",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "primaryLabel",
      type: "string",
    }),
    defineField({
      name: "primaryHref",
      type: "string",
      description: "Use an internal path like /contact or an absolute URL.",
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
      media: "poster",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Video Hero",
        media: media ?? PlayIcon,
      };
    },
  },
});
