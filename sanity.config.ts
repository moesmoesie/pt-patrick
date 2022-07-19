import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./lib/sanity/schemas";
import * as schemas from "./schemas";
import structure from "./lib/sanity/stucture";

export default createConfig({
  name: "default",
  title: "PT Patrick",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  plugins: [
    deskTool({
      structure,
    }),
  ],
  document: {
    productionUrl: async (prev, context) => {
      const { client, dataset, document } = context;

      if (document._type === "homePage") {
        const params = new URLSearchParams();
        params.set("secret", "secret");
        params.set("slug", "");
        return `https://pt-patrick.vercel.app/api/preview?${params}`;
      }

      return prev;
    },
  },

  schema: {
    types: [...schemaTypes, ...(Object.values(schemas) as any)],
  },
});
