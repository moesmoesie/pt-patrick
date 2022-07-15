import { HomeHighlightModuleProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModuleContainer, Image } from "../../components";
const HomeHighlightModudle: React.FC<HomeHighlightModuleProps> = (props) => {
  return (
    <ModuleContainer
      color="#000000"
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <Image
        type="sanity"
        alt={props.image.alt ?? undefined}
        caption={props.image.caption ?? undefined}
        asset={props.image.asset}
        width={500}
        objectFit="cover"
        className="w-full object-cover h-[355px] overflow-hidden rounded-lg -translate-y-10"
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
