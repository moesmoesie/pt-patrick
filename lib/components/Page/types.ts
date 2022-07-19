import { HeaderProps } from "../Header/types";

export interface PageProps {
  header: HeaderProps;
  children: JSX.Element;
  title: string;
  keywords?: string[];
  description?: string;
  favicon: string;
  preview?: boolean;
}
