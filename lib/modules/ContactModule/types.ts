import { z } from "zod";
import { BaseModuleZod, SanityImageZod } from "../types";

export const ContactModuleZod = BaseModuleZod.extend({
  type: z.literal("contactModule"),
  title: z.any(),
  body: z.string(),
  whatsapp: z.string(),
  phone: z.string(),
  email: z.string(),
  image: SanityImageZod,
});

export type ContactModuleProps = z.infer<typeof ContactModuleZod>;
