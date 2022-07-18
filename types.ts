import ModuleZod from "./lib/components/Module/types";
import { z } from "zod";
import { HeaderZod } from "./lib/components/Header/types";

export const PageZod = z.object({
  header: HeaderZod,
  modules: ModuleZod.array(),
});

export const HomePageZod = PageZod.extend({});
