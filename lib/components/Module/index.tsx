import ModuleProps from "./types";
import HomeLandingModule from "./HomeLandingModule";
import HomeAboutMeModule from "./HomeAboutMeModule";

const Module: React.FC<ModuleProps> = ({ module }) => {
  switch (module) {
    case "homeLandingModule":
      return <HomeLandingModule />;
    case "homeAboutMeModule":
      return <HomeAboutMeModule />;
    default:
      return <HomeLandingModule />;
  }
};

export default Module;
