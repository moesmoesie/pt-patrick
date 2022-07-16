import { z } from "zod";

import { BaseModuleZod, SanityImageZod } from "../types";

const CardZod = z.object({
  title: z.string(),
  body: z.string(),
  key: z.string().optional(),
  icon: z.object({
    package: z.string(),
    name: z.string(),
  }),
});

export const HomeLandingModuleZod = BaseModuleZod.extend({
  type: z.literal("homeLandingModule"),
  cards: z.array(CardZod).min(3).max(3),
  hero: z.object({
    title: z.any(),
    body: z.string(),
    callToAction: z.string(),
    image: SanityImageZod,
  }),
});
