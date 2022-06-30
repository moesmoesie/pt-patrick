import ModuleZod from "./lib/components/Module/types";
import { z } from "zod";

export const PageZod = z.object({
  modules: ModuleZod.array(),
});

export const HomePageZod = PageZod.extend({});
