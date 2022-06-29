import { defineType } from "sanity";

export default defineType({
  title: "Home",
  type: "document",
  name: "homePage",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
});
