import { defineType } from "sanity";
import * as modules from "../modules";
export const moduleSchemaTypes = Object.values(modules);

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
          type: "reference",
          to: moduleSchemaTypes.map((el) => {
            return {
              type: el.name,
            };
          }),
        },
      ],
    },
  ],
});
