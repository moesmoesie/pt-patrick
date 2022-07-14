import { ModuleContainer, Chip } from "../../components";
import { HomeAboutMeProps } from "./types";

const HomeAboutMeModule: React.FC<HomeAboutMeProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <div className="relative">
        <img
          src="/assets/portrait.png"
          alt="Trainer"
          className="max-w-[335px] mb-12 rounded-full"
        />
        <div className="absolute bottom-4 left-4">
          <Chip>{props.name}</Chip>
        </div>
      </div>

      <h2 className="header-2 font-bold  mb-8">{props.title}</h2>
      <p className="font-overpass text-[23px] leading-[36.8px] tracking-[0.02em]">
        {props.body}
      </p>
    </ModuleContainer>
  );
};

export default HomeAboutMeModule;
