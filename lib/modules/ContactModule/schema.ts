import { defineType } from "sanity";
export default defineType({
  title: "Contact Module",
  name: "contactModule",
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
      type: "editor-highlighter",
    },
    {
      title: "Body",
      name: "body",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "richImage",
    },
    {
      title: "Whatsapp",
      name: "whatsapp",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
  ],
});
