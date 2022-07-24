import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";

export default defineType({
  title: "Home About Module",
  name: "homeAboutMeModule",
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
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Body",
      name: "body",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "richImage",
      // @ts-ignore
      validation: RichImageValidation,
    },
  ],
});
