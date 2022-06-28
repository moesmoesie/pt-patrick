import ModuleProps from "./types";
import HomeLandingModule from "./HomeLandingModule";
import HomeAboutMeModule from "./HomeAboutMeModule";
import HomeCoreInfoModule from "./HomeCoreInfoModule";

const Module: React.FC<ModuleProps> = ({ module }) => {
  switch (module) {
    case "homeLandingModule":
      return <HomeLandingModule />;
    case "homeAboutMeModule":
      return <HomeAboutMeModule />;
    case "homeCoreInfoModule":
      return <HomeCoreInfoModule />;
    default:
      return <HomeLandingModule />;
  }
};

export default Module;
