import { z } from "zod";

const CardZod = z.object({
  title: z.string(),
  body: z.string(),
  key: z.string().optional(),
  icon: z.string(),
});

const BaseModuleZod = z.object({
  key: z.string(),
});

export const HomeLandingModuleZod = BaseModuleZod.extend({
  type: z.literal("homeLandingModule"),
  cards: z.array(CardZod).min(3).max(3),
  hero: z.object({
    title: z.string(),
    body: z.string(),
    callToAction: z.string(),
  }),
});

const DefaultZod = BaseModuleZod.extend({
  type: z.literal("defaultModule"),
});

const ModuleZod = z.discriminatedUnion("type", [
  HomeLandingModuleZod,
  DefaultZod,
]);

export default ModuleZod;

export interface CorePillar {
  value: string;
  title: string;
  body: string;
  keywords: string[];
  image: string;
}
