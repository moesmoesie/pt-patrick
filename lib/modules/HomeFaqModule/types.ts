import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomeFaqModuleZod = BaseModuleZod.extend({
  type: z.literal("homeFaqModule"),
  title: z.any(),
  questions: z
    .object({
      title: z.string(),
      body: z.string(),
    })
    .array(),
});

export type HomeFaqModuleProps = z.infer<typeof HomeFaqModuleZod>;
