import { z } from "zod";
import { BaseModuleZod } from "../types";

export const HomeReviewsModuleZod = BaseModuleZod.extend({
  type: z.literal("homeReviewsModule"),
  title: z.string(),
});

export type HomeReviewsModuleProps = z.infer<typeof HomeReviewsModuleZod>;
