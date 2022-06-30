import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./lib/sanity/schemas";
import * as schemas from "./schemas";

export default createConfig({
  name: "default",
  title: "PT Patrick",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: [...schemaTypes, ...(Object.values(schemas) as any)],
  },
});
