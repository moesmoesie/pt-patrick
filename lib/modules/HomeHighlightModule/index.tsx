import { HomeHighlightModuleProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeHighlightModudle: React.FC<HomeHighlightModuleProps> = (props) => {
  return (
    <div className="pt-10">
      <div className="bg-black px-5 pb-20">
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
      </div>
    </div>
  );
};

export default HomeHighlightModudle;
