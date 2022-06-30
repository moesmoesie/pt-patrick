import ModuleZod from "./types";
import { HomeCoreInfoModule, HomeLandingModule } from "../../modules";
import { z } from "zod";

const Module: React.FC<z.infer<typeof ModuleZod>> = (props) => {
  switch (props.type) {
    case "homeLandingModule":
      return <HomeLandingModule {...props} />;
    case "homeCoreInfoModule":
      return <HomeCoreInfoModule {...props} />;
    default:
      return <div>Module</div>;
  }
};

export default Module;
