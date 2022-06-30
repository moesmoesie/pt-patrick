import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomeAboutMeModuleZod = BaseModuleZod.extend({
  type: z.literal("homeAboutMeModule"),
  title: z.string(),
  body: z.string(),
  name: z.string(),
});

export type HomeAboutMeProps = z.infer<typeof HomeAboutMeModuleZod>;
