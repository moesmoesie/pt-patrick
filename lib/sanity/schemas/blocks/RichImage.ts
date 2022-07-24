import { defineType } from "sanity";
import { Rule } from "sanity";

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

export const RichImageValidation: any = () => {
  return (Rule: Rule) =>
    Rule.custom((fields: any) => {
      if (fields === undefined || fields?.asset === undefined) {
        return "Image is required";
      }
      return true;
    });
};
