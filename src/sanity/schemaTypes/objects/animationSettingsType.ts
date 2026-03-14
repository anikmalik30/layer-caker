import { defineField, defineType } from "sanity";

export const animationSettingsType = defineType({
  name: "animationSettings",
  title: "Animation Settings",
  type: "object",
  fields: [
    defineField({
      name: "preset",
      type: "string",
      initialValue: "fade-up",
      options: {
        list: [
          { title: "Fade Up", value: "fade-up" },
          { title: "Fade In", value: "fade-in" },
          { title: "Slide Left", value: "slide-left" },
          { title: "Slide Right", value: "slide-right" },
          { title: "Scale In", value: "scale-in" },
          { title: "Parallax Soft", value: "parallax-soft" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "trigger",
      type: "string",
      initialValue: "onEnter",
      options: {
        list: [
          { title: "On Enter", value: "onEnter" },
          { title: "On Load", value: "onLoad" },
          { title: "On Scroll", value: "onScroll" },
        ],
      },
    }),
    defineField({
      name: "duration",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.min(0.2).max(4),
    }),
    defineField({
      name: "delay",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(3),
    }),
    defineField({
      name: "stagger",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(1),
    }),
    defineField({
      name: "once",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "disableOnMobile",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
