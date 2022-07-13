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
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
    },
  ],
});