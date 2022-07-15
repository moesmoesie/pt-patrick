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
        className="h-[355px] w-full -translate-y-10 overflow-hidden rounded-lg object-cover"
      />
      <p className="header-2 mb-10 font-bold text-white">{props.title}</p>
      <p className="body-1 mb-10 text-white">{props.body}</p>
      <button className="border border-white px-4 py-1 font-rubik font-medium text-white">
        <FontAwesomeIcon className="text-[14px]" icon="play" />
        <span className="ml-2 underline">Watch Video</span>
      </button>
    </ModuleContainer>
  );
};

export default HomeHighlightModudle;
