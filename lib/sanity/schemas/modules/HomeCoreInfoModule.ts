import { defineType } from "sanity";

export default defineType({
  title: "Home Core Info Module",
  name: "homeCoreInfoModule",
  type: "document",
  fields: [
    {
      title: "Module Identifier",
      name: "module_identifier",
      type: "string",
    },
  ],
});
