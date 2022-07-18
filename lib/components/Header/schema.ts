import { defineField, defineType } from "sanity";
import { modulesTypes } from "../../sanity/schemas/utils";
export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      title: "Identifier",
      name: "identifier",
      type: "string",
    }),
    defineField({
      title: "Menu",
      name: "menu",
      type: "array",
      of: [
        {
          type: "object",
          title: "Menu Item",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "module",
              type: "reference",
              title: "Module",
              to: modulesTypes,
            },
          ],
        },
      ],
    }),
  ],
});
