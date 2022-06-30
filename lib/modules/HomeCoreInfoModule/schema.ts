import { defineType } from "sanity";

export default defineType({
  title: "Home Core Info Module",
  name: "homeCoreInfoModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Core Pillars",
      name: "corePillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
            },

            {
              name: "title",
              title: "Title",
              type: "string",
            },

            {
              name: "body",
              title: "Body",
              type: "text",
            },

            {
              name: "keywords",
              title: "Keywords",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
});
