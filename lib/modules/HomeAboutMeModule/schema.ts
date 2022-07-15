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
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          description: "Will display on hover.",
        },
        {
          name: "alternative",
          type: "string",
          title: "Alternative",
          description: "Important for Accessibility & SEO.",
        },
      ],
    },
  ],
});
