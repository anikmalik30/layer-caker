import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
  name: "pageBuilder",
  type: "array",
  of: [
    defineArrayMember({ type: "hero" }),
    defineArrayMember({ type: "videoHero" }),
    defineArrayMember({ type: "modelShowcase" }),
    defineArrayMember({ type: "specGrid" }),
    defineArrayMember({ type: "features" }),
    defineArrayMember({ type: "splitImage" }),
    defineArrayMember({ type: "galleryRail" }),
    defineArrayMember({ type: "ctaBand" }),
    defineArrayMember({ type: "faqs" }),
  ],
  options: {
    insertMenu: {
      views: [
        {
          name: "grid",
          previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
        },
      ],
    },
  },
});
