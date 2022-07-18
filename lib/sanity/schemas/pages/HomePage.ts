import { defineType } from "sanity";
import { modulesTypes } from "../utils";
export default defineType({
  title: "Home",
  type: "document",
  name: "homePage",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "text",
      name: "description",
      title: "Description",
    },
    {
      title: "Header",
      name: "header",
      type: "reference",
      to: [{ type: "header" }],
    },
    {
      type: "array",
      name: "keywords",
      title: "Keywords",
      of: [{ type: "string" }],
    },
    {
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        {
          type: "moduleContainer",
        },
      ],
    },
  ],
});
