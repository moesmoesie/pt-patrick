import { z } from "zod";

export const SizeZod = z.union([
  z.literal("none"),
  z.literal("s"),
  z.literal("m"),
  z.literal("l"),
  z.literal("xl"),
  z.literal("2xl"),
  z.literal("3xl"),
  z.literal("4xl"),
]);

export const SizeGroupZod = z.object({
  small: SizeZod,
  medium: SizeZod,
  large: SizeZod,
});

export const BaseModuleZod = z.object({
  key: z.string(),
  backgroundColor: z.string().nullable(),
  hasSeperator: z.boolean().nullable(),
  paddingBottom: SizeGroupZod.nullable(),
  paddingTop: SizeGroupZod.nullable(),
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
