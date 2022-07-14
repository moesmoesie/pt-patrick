import { defineType } from "sanity";

export default defineType({
  title: "Home Pricing Module",
  name: "homePricingModule",
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
