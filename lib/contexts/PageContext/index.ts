import { createContext } from "react";
import PageContextProps from "./types";

const PageContext = createContext<PageContextProps>({
  preview: false,
});

export default PageContext;
