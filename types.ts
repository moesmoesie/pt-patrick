import ModuleZod from "./lib/components/Module/types";
import { z } from "zod";
import { HeaderZod } from "./lib/components/Header/types";

export const PageZod = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.string().array().optional(),
  header: HeaderZod,
  modules: ModuleZod.array(),
});

export const HomePageZod = PageZod.extend({});
export type HomePageProps = z.infer<typeof HomePageZod>;
