import { defineType } from "sanity";

export default defineType({
  title: "Home About Module",
  name: "homeAboutMeModule",
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
      title: "Name",
      name: "name",
      type: "string",
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
  ],
});
