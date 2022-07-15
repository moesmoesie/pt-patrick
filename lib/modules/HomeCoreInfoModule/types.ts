import { z } from "zod";

import { BaseModuleZod, SanityImageZod } from "../types";

export const CorePillarZod = z.object({
  value: z.string(),
  title: z.string(),
  body: z.string(),
  image: SanityImageZod,
  keywords: z.string().array(),
});

export type CorePillarProps = z.infer<typeof CorePillarZod>;

export const HomeCoreInfoModuleZod = BaseModuleZod.extend({
  type: z.literal("homeCoreInfoModule"),
  title: z.string(),
  corePillars: CorePillarZod.array(),
});

export type HomeCoreInfoModuleProps = z.infer<typeof HomeCoreInfoModuleZod>;
