import ModuleProps from "./types";
import HomeLandingModule from "./HomeLandingModule";

const Module: React.FC<ModuleProps> = ({ module }) => {
  switch (module) {
    case "homeLandingModule":
      return <HomeLandingModule />;
    default:
      return <HomeLandingModule />;
  }
};

export default Module;
