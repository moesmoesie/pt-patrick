import { z } from "zod";
import { BaseModuleZod, SanityImageZod } from "../types";

export const WorkoutZod = z.object({
  name: z.string(),
  description: z.string(),
  image: SanityImageZod,
});

export type WorkoutProps = z.infer<typeof WorkoutZod>;

export const HomeWorkoutsModuleZod = BaseModuleZod.extend({
  type: z.literal("homeWorkoutsModule"),
  title: z.string(),
  workouts: WorkoutZod.array(),
});

export type HomeWorkoutsModuleProps = z.infer<typeof HomeWorkoutsModuleZod>;
