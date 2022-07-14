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
      type: "string",
    },
  ],
});
