import { z } from "zod";

export const HeaderZod = z.object({
  menu: z
    .object({
      title: z.string(),
      id: z.string(),
    })
    .array(),
});

export type HeaderProps = z.infer<typeof HeaderZod>;
