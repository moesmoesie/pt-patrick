import { defineField, defineType } from "sanity";
import { modulesTypes, findModule } from "../utils";

export default defineType({
  name: "moduleContainer",
  type: "object",
  title: "Module",
  fields: [
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          {
            title: "White",
            value: "#ffffff",
          },
          {
            title: "Gray",
            value: "#f0f0f0",
          },
        ],
      },
    },

    {
      name: "paddingTop",
      title: "Padding Top",
      type: "size",
    },

    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "size",
    },

    {
      title: "Add seperator at bottom of module?",
      name: "hasSeperator",
      type: "boolean",
      validation: (rule) => rule.required(),
    },
    {
      name: "module",
      title: "Module",
      type: "reference",
      to: modulesTypes,
    },
  ],
  preview: {
    select: {
      title: "module.module_identifier",
      type: "module._type",
    },
    prepare(value, viewOptions?) {
      const { title, type } = value as any;
      const data = findModule(type);
      return {
        title,
        subtitle: data?.title,
        media: data?.icon,
      };
    },
  },
});
