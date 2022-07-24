import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";

export default defineType({
  title: "Home Reviews Module",
  name: "homeReviewsModule",
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
      //@ts-ignore
      validation: EditorValidation,
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      validation: (rule) => rule.min(1),
      of: [
        {
          name: "review",
          title: "Review",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
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
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
              image: "image",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, image } = value as any;
              return { title, subtitle, media: image };
            },
          },
        },
      ],
    },
  ],
});
