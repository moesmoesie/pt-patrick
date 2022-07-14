import { HomeHighlightModuleProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModuleContainer } from "../../components";
const HomeHighlightModudle: React.FC<HomeHighlightModuleProps> = (props) => {
  return (
    <ModuleContainer paddingTop="none" color="#000000">
      <img
        className="w-full object-cover h-[355px] rounded-lg -translate-y-10"
        alt="location"
        src="/assets/location.png"
      />
      <p className="header-2 text-white font-bold mb-10">{props.title}</p>
      <p className="body-1 text-white mb-10">{props.body}</p>
      <button className="font-rubik border border-white px-4 py-1 font-medium text-white">
        <FontAwesomeIcon className="text-[14px]" icon="play" />
        <span className="underline ml-2">Watch Video</span>
      </button>
    </ModuleContainer>
  );
};

export default HomeHighlightModudle;
