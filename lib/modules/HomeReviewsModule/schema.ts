import { defineType } from "sanity";

export default defineType({
  title: "Home Reviews Module",
  name: "homeReviewsModule",
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
