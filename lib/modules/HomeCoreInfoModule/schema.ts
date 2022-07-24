import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";

export default defineType({
  title: "Home Core Info Module",
  name: "homeCoreInfoModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "editor-highlighter",
      // @ts-ignore
      validation: EditorValidation,
    },
    {
      title: "Core Pillars",
      name: "corePillars",
      type: "array",
      validation: (rule) => rule.min(3),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              validation: (rule) => rule.required(),
            },

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
            {
              name: "image",
              title: "Image",
              type: "richImage",
              // @ts-ignore
              validation: RichImageValidation,
            },
            {
              name: "keywords",
              title: "Keywords",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "title",
              image: "image",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, image } = value as any;
              return {
                title: title,
                subtitle,
                media: image,
              };
            },
          },
        },
      ],
    },
  ],
});
