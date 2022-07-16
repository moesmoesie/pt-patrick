import { title } from "process";
import { defineType } from "sanity";
import { modulesTypes, findModuleIcon } from "../utils";

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
            title: "Black",
            value: "#000000",
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
      type: "string",
      options: {
        list: [
          {
            title: "Small",
            value: "small",
          },
          {
            title: "Medium",
            value: "medium",
          },
          {
            title: "Large",
            value: "large",
          },
        ],
      },
    },

    {
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      options: {
        list: [
          {
            title: "Small",
            value: "small",
          },
          {
            title: "Medium",
            value: "medium",
          },
          {
            title: "Large",
            value: "large",
          },
        ],
      },
    },
    {
      title: "Add seperator at bottom of module?",
      name: "hasSeperator",
      type: "boolean",
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
      subtitle: "module._type",
    },
    prepare(value, viewOptions?) {
      const { title, subtitle } = value as any;
      return {
        title,
        subtitle,
        media: findModuleIcon(subtitle),
      };
    },
  },
});
