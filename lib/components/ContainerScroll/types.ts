import { UIEventHandler } from "react";

interface ContainerScrollProps {
  children: JSX.Element | JSX.Element[];
  height: string;
  onScroll?: UIEventHandler<HTMLDivElement>;
}

export default ContainerScrollProps;
