import { defineType } from "sanity";

export default defineType({
  title: "Home Highlight Module",
  name: "homeHighlightModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "editor-highlighter",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },

    {
      name: "image",
      title: "Image",
      type: "richImage",
    },
  ],
});
