import { z } from "zod";

import { BaseModuleZod } from "../types";

export const HomeCoreInfoModuleZod = BaseModuleZod.extend({
  type: z.literal("homeCoreInfoModule"),
});
