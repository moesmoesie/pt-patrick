import { defineType } from "sanity";

export default defineType({
  title: "Image",
  name: "richImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Will display on hover.",
    },
    {
      name: "alternative",
      type: "string",
      title: "Alternative",
      description: "Important for Accessibility & SEO.",
    },
  ],
});
