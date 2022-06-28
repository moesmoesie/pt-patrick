interface ModuleProps {
  module: "homeLandingModule" | "homeAboutMeModule" | "homeCoreInfoModule";
}

export default ModuleProps;

export interface CorePillar {
  value: string;
  title: string;
  body: string;
  keywords: string[];
  image: string;
}
