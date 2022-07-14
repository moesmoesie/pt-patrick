import { defineType } from "sanity";

export default defineType({
  title: "Home FAQ Module",
  name: "homeFaqModule",
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
  ],
});
