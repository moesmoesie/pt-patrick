import ModuleZod from "./lib/components/Module/types";
import { z } from "zod";
import { HeaderZod } from "./lib/components/Header/types";
import { GlobalZod } from "./lib/modules/types";

export const PageZod = z.object({
  title: z.string(),
  description: z.string().optional(),
  global: GlobalZod,
  keywords: z.string().array().optional(),
  header: HeaderZod,
  modules: ModuleZod.array(),
});

export const HomePageZod = PageZod.extend({});
export type HomePageProps = z.infer<typeof HomePageZod>;
