import ContainerProps from "./types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[450px] large:max-w-[1280px] relative px-3 mx-auto small:px-5">
      {children}
    </div>
  );
};

export default Container;
