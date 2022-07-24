import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";

export default defineType({
  title: "Home Highlight Module",
  name: "homeHighlightModule",
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
  ],
});
