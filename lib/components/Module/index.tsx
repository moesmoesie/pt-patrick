import ModuleZod from "./types";
import {
  HomeCoreInfoModule,
  HomeLandingModule,
  HomeAboutMeModule,
  HomeWorkoutsModule,
  HomeHighlightModule,
  HomeReviewsModule,
  HomePricingModule,
  HomeFaqModule,
  ContactModule,
} from "../../modules";
import { z } from "zod";

const Module: React.FC<z.infer<typeof ModuleZod>> = (props) => {
  switch (props.type) {
    case "homeLandingModule":
      return <HomeLandingModule {...props} />;
    case "homeCoreInfoModule":
      return <HomeCoreInfoModule {...props} />;
    case "homeAboutMeModule":
      return <HomeAboutMeModule {...props} />;
    case "homeWorkoutsModule":
      return <HomeWorkoutsModule {...props} />;
    case "homeHighlightModule":
      return <HomeHighlightModule {...props} />;
    case "homeReviewsModule":
      return <HomeReviewsModule {...props} />;
    case "homePricingModule":
      return <HomePricingModule {...props} />;
    case "homeFaqModule":
      return <HomeFaqModule {...props} />;
    case "contactModule":
      return <ContactModule {...props} />;
    default:
      return <div>Module</div>;
  }
};

export default Module;
