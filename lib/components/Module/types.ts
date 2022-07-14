import { z } from "zod";
import { HomeLandingModuleZod } from "../../modules/HomeLandingModule/types";
import { HomeAboutMeModuleZod } from "../../modules/HomeAboutMeModule/types";
import { HomeCoreInfoModuleZod } from "../../modules/HomeCoreInfoModule/types";
import { HomeWorkoutsModuleZod } from "../../modules/HomeWorkoutsModule/types";
import { HomeHighlightModuleZod } from "../../modules/HomeHighlightModule/types";
import { HomeReviewsModuleZod } from "../../modules/HomeReviewsModule/types";
import { HomePricingModuleZod } from "../../modules/HomePricingModule/types";

const ModuleZod = z.discriminatedUnion("type", [
  HomeLandingModuleZod,
  HomeAboutMeModuleZod,
  HomeCoreInfoModuleZod,
  HomeWorkoutsModuleZod,
  HomeHighlightModuleZod,
  HomeReviewsModuleZod,
  HomePricingModuleZod,
]);

export default ModuleZod;
