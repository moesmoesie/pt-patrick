import { z } from "zod";
import { BaseModuleZod } from "../types";

export const WorkoutZod = z.object({
  name: z.string(),
  description: z.string(),
});

export type WorkoutProps = z.infer<typeof WorkoutZod>;

export const HomeWorkoutsModuleZod = BaseModuleZod.extend({
  type: z.literal("homeWorkoutsModule"),
  title: z.string(),
  workouts: WorkoutZod.array(),
});

export type HomeWorkoutsModuleProps = z.infer<typeof HomeWorkoutsModuleZod>;
