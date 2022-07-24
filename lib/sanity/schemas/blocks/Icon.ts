import { defineType } from "sanity";
import { Rule } from "sanity";

export default defineType({
  name: "icon",
  type: "object",
  title: "Icon",
  options: {
    columns: 2,
  },
  description:
    "Find the icon name you need here: https://fontawesome.com/icons",
  fields: [
    {
      name: "package",
      title: "Package",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          {
            title: "Free Solid Icons",
            value: "fas",
          },
          {
            title: "Brand Icons",
            value: "fab",
          },
        ],
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});

export const IconValidation: any = () => {
  return (Rule: Rule) =>
    Rule.custom((fields: any) => {
      if (fields === undefined) {
        return "Icon is required";
      }
      return true;
    });
};
