import { z } from "zod";

import { BaseModuleZod } from "../types";

export const HomeAboutMeModuleZod = BaseModuleZod.extend({
  type: z.literal("homeAboutMeModule"),
});
