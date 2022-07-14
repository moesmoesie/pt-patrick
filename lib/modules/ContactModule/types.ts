import { z } from "zod";
import { BaseModuleZod } from "../types";

export const ContactModuleZod = BaseModuleZod.extend({
  type: z.literal("contactModule"),
  title: z.string(),
});

export type ContactModuleProps = z.infer<typeof ContactModuleZod>;
