import ContainerProps from "./types";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[375px] my-20 mx-auto px-5">{children}</div>;
};

export default Container;
