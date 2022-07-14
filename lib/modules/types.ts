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
