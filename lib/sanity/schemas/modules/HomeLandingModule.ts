import { defineType } from "sanity";

export default defineType({
  title: "Home Landing Module",
  name: "homeLandingModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Hero Title",
          type: "text",
        },
        {
          name: "body",
          title: "Hero Body",
          type: "text",
        },

        {
          name: "callToAction",
          title: "Hero Call to Action",
          type: "string",
        },
      ],
    },
    {
      name: "cards",
      title: "Cards",
      type: "array",
      validation: (rule) => rule.min(3).max(3),
      of: [
        {
          title: "Card",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "icon",
            },
            {
              name: "body",
              title: "Body",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
});
