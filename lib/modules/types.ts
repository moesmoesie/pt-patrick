import { z } from "zod";

export const BaseModuleZod = z.object({
  key: z.string(),
  backgroundColor: z.string().nullable(),
  hasSeperator: z.boolean().nullable(),
  paddingBottom: z
    .union([z.literal("small"), z.literal("medium"), z.literal("large")])
    .nullable(),
  paddingTop: z
    .union([z.literal("small"), z.literal("medium"), z.literal("large")])
    .nullable(),
});

export const SanityImageZod = z.object({
  alt: z.string().nullish(),
  caption: z.string().nullish(),
  lqip: z.string().nullish(),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal("reference"),
    hotspot: z.any(),
    crop: z.any(),
  }),
});
