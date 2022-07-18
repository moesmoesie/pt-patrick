import { z } from "zod";
import { BaseModuleZod, SanityImageZod } from "../types";

const ReviewZod = z.object({
  name: z.string(),
  title: z.string(),
  body: z.string(),
  image: SanityImageZod,
});

export const HomeReviewsModuleZod = BaseModuleZod.extend({
  type: z.literal("homeReviewsModule"),
  title: z.any(),
  reviews: ReviewZod.array(),
});

export type HomeReviewsModuleProps = z.infer<typeof HomeReviewsModuleZod>;
export type ReviewProps = z.infer<typeof ReviewZod>;
