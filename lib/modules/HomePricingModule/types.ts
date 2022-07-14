import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomePricingModuleZod = BaseModuleZod.extend({
  type: z.literal("homePricingModule"),
  title: z.string(),
});

export type HomePricingModuleProps = z.infer<typeof HomePricingModuleZod>;
