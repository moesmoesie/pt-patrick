import ContainerProps from "./types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-[450px] px-3 small:px-5 large:max-w-[1280px]">
      {children}
    </div>
  );
};

export default Container;
