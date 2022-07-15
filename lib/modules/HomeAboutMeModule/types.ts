import { z } from "zod";
import { BaseModuleZod, SanityImageZod } from "../types";

export const HomeAboutMeModuleZod = BaseModuleZod.extend({
  type: z.literal("homeAboutMeModule"),
  title: z.string(),
  body: z.string(),
  name: z.string(),
  image: SanityImageZod,
});

export type HomeAboutMeProps = z.infer<typeof HomeAboutMeModuleZod>;
