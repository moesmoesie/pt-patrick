import { defineType } from "sanity";
import { EditorValidation } from "../../sanity/schemas/blocks/Editors";
import { RichImageValidation } from "../../sanity/schemas/blocks/RichImage";

export default defineType({
  title: "Contact Module",
  name: "contactModule",
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
    {
      title: "Whatsapp",
      name: "whatsapp",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      validation: (rule) => rule.required(),
    },
  ],
});
