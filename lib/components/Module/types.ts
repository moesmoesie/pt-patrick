import { z } from "zod";
import { HomeLandingModuleZod } from "../../modules/HomeLandingModule/types";
import { HomeAboutMeModuleZod } from "../../modules/HomeAboutMeModule/types";
import { HomeCoreInfoModuleZod } from "../../modules/HomeCoreInfoModule/types";
import { HomeWorkoutsModuleZod } from "../../modules/HomeWorkoutsModule/types";
import { HomeHighlightModuleZod } from "../../modules/HomeHighlightModule/types";

const ModuleZod = z.discriminatedUnion("type", [
  HomeLandingModuleZod,
  HomeAboutMeModuleZod,
  HomeCoreInfoModuleZod,
  HomeWorkoutsModuleZod,
  HomeHighlightModuleZod,
]);

export default ModuleZod;
