import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomeFaqModuleZod = BaseModuleZod.extend({
  type: z.literal("homeFaqModule"),
  title: z.string(),
});

export type HomeFaqModuleProps = z.infer<typeof HomeFaqModuleZod>;
