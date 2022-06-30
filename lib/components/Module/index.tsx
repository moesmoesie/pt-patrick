import ModuleZod from "./types";
import HomeLandingModule from "../../modules/HomeLandingModule";
import { z } from "zod";

const Module: React.FC<z.infer<typeof ModuleZod>> = (props) => {
  switch (props.type) {
    case "homeLandingModule":
      return <HomeLandingModule {...props} />;
    default:
      return <div>Module</div>;
  }
};

export default Module;
