import { z } from "zod";
import { BaseModuleZod } from "../types";

export const ContactModuleZod = BaseModuleZod.extend({
  type: z.literal("contactModule"),
  title: z.string(),
  body: z.string(),
  whatsapp: z.string(),
  phone: z.string(),
  email: z.string(),
});

export type ContactModuleProps = z.infer<typeof ContactModuleZod>;
