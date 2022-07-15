interface PaddingContainerProps {
  children: JSX.Element | JSX.Element[];
  color?: string | null;
  paddingBottom?: "small" | "medium" | "large" | "none" | null;
  paddingTop?: "small" | "medium" | "large" | "none" | null;
  hasSeperator?: boolean;
}

export default PaddingContainerProps;
