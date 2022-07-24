import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";
export default defineType({
  title: "Home Workouts Module",
  name: "homeWorkoutsModule",
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
      name: "workouts",
      title: "Workouts",
      type: "array",
      validation: (rule) => rule.min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            },
            {
              name: "description",
              title: "Description",
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
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
              image: "image",
            },
            prepare(value, viewOptions?) {
              const { title, subtitle, image } = value as any;
              return {
                title,
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
