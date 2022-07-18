import { defineField, defineType } from "sanity";

export default defineType({
  title: "Settings",
  name: "settings",
  type: "document",
  fields: [
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
  ],
});
