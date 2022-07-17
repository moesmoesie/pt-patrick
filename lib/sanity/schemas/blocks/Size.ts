import { defineField, defineType } from "sanity";

export const sizes = [
  {
    title: "None",
    value: "none",
  },
  {
    title: "S",
    value: "s",
  },
  {
    title: "M",
    value: "m",
  },
  {
    title: "L",
    value: "l",
  },
  {
    title: "XL",
    value: "xl",
  },
  {
    title: "2XL",
    value: "2xl",
  },
  {
    title: "3XL",
    value: "3xl",
  },
  {
    title: "4XL",
    value: "4xl",
  },
];

const getSizeField = (name: string, title: string) => {
  return defineField({
    name,
    title,
    type: "string",
    options: {
      list: sizes,
    },
    validation: (rule) => rule.required(),
  });
};

export default defineType({
  name: "size",
  title: "Size",
  type: "object",
  options: {
    columns: 3,
  },
  fields: [
    getSizeField("small", "Small"),
    getSizeField("medium", "Medium"),
    getSizeField("large", "Large"),
  ],
});
