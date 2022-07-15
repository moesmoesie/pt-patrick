import { z } from "zod";
import { BaseModuleZod, SanityImageZod } from "../types";

export const HomeHighlightModuleZod = BaseModuleZod.extend({
  type: z.literal("homeHighlightModule"),
  title: z.string(),
  body: z.string(),
  image: SanityImageZod,
});

export type HomeHighlightModuleProps = z.infer<typeof HomeHighlightModuleZod>;
