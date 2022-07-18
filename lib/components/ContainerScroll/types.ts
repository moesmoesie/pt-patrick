import { UIEventHandler } from "react";

interface ContainerScrollProps {
  children: JSX.Element | JSX.Element[];
  height?: string;
  onScroll?: UIEventHandler<HTMLDivElement>;
  className?: string;
}

export default ContainerScrollProps;
