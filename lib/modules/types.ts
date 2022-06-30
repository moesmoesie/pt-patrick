import { z } from "zod";

export const BaseModuleZod = z.object({
  key: z.string(),
});
