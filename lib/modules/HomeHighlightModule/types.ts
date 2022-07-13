import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomeHighlightModuleZod = BaseModuleZod.extend({
  type: z.literal("homeHighlightModule"),
  title: z.string(),
  body: z.string(),
});

export type HomeHighlightModuleProps = z.infer<typeof HomeHighlightModuleZod>;
