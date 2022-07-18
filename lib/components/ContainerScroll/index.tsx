import ContainerScrollProps from "./types";

const ContainerScroll: React.FC<ContainerScrollProps> = (props) => {
  return (
    <div className="relative mx-auto max-w-[450px]  medium:max-w-[1000px]  large:max-w-[1280px]">
      <div className="absolute left-0 top-0 z-50 h-[95%] w-4 bg-gradient-to-r from-gray-300 to-gray-300/0 medium:w-12" />
      <div className="absolute right-0 z-50 h-[95%] w-4 bg-gradient-to-l from-gray-300 to-gray-300/0 medium:w-12" />
      <div className="relative flex snap-x snap-mandatory overflow-x-scroll pl-3 pb-10 small:pl-5 medium:pl-16">
        {props.children}
      </div>
    </div>
  );
};

export default ContainerScroll;
