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
      type: "string",
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
  ],
});
