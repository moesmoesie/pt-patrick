import { z } from "zod";
import { BaseModuleZod } from "../types";

const priceZod = z.object({
  caption: z.string(),
  price: z.string(),
  priceSubtitle: z.string(),
  body: z.string(),
  bulletPoints: z.string().array(),
  callToAction: z.string(),
});

export const HomePricingModuleZod = BaseModuleZod.extend({
  type: z.literal("homePricingModule"),
  title: z.string(),
  pricingList: priceZod.array().min(3).max(3),
});

export type HomePricingModuleProps = z.infer<typeof HomePricingModuleZod>;
