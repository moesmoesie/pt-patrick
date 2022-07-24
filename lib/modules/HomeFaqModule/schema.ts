import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";

export default defineType({
  title: "Home FAQ Module",
  name: "homeFaqModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "editor-highlighter",
      // @ts-ignore
      validation: EditorValidation,
    },
    {
      name: "questions",
      title: "Questions",
      type: "array",
      validation: (rule) => rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "body",
              title: "Body",
              type: "text",
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
});
