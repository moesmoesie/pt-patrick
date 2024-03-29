import { HomeHighlightModuleProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModuleContainer, Image } from "../../components";
import RichText from "../../components/RichText";
const HomeHighlightModudle: React.FC<HomeHighlightModuleProps> = (props) => {
  return (
    <ModuleContainer
      color="#000000"
      paddingTop={null}
      paddingBottom={null}
      hasSeperator={props.hasSeperator}
      id={props.module_identifier}
    >
      <div className="large:flex">
        <div className="relative flex-[1.3]">
          <Image
            type="sanity"
            alt={props.image.alt ?? undefined}
            caption={props.image.caption ?? undefined}
            asset={props.image.asset}
            width={1200}
            objectFit="cover"
            className="z-50 h-[375px] w-full -translate-y-12 overflow-hidden rounded-lg object-cover medium:h-[400px] large:absolute large:-left-16 large:-top-[8%] large:h-[116%] large:translate-y-0"
          />
        </div>
        <div className="flex-1 pb-20 large:py-28">
          <h2 className="header-2 mb-10 font-bold text-white">
            {<RichText content={props.title} />}
          </h2>
          <p className="body-1 mb-10 text-white medium:max-w-2xl large:max-w-[500px]">
            {props.body}
          </p>
          <button className="border border-white px-4 py-1 font-rubik font-medium text-white">
            <FontAwesomeIcon className="text-[14px]" icon="play" />
            <span className="ml-2 underline">Watch Video</span>
          </button>
        </div>
      </div>
    </ModuleContainer>
  );
};

export default HomeHighlightModudle;
