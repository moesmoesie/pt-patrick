import { defineType } from "sanity";

export default defineType({
  title: "Home About Module",
  name: "homeAboutModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
  ],
});
