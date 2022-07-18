import { z } from "zod";
import { SanityImageZod } from "../../modules/types";
export const HeaderZod = z.object({
  logo: SanityImageZod,
  menu: z
    .object({
      title: z.string(),
      id: z.string(),
    })
    .array(),
});

export type HeaderProps = z.infer<typeof HeaderZod>;
