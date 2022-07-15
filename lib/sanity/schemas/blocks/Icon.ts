import { defineType } from "sanity";

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
      validation: (rule) => rule.required(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
});
