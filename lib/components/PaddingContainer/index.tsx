import PaddingContainerProps from "./types";

const PaddingContainer: React.FC<PaddingContainerProps> = ({
  color,
  paddingBottom = "medium",
  paddingTop = "medium",
  children,
}) => {
  return (
    <div
      style={{
        background: color,
      }}
      className={`
          ${
            paddingBottom == "small"
              ? "pb-[40px]"
              : paddingBottom === "medium"
              ? "pb-[60px]"
              : paddingBottom === "large"
              ? "pb-[80px]"
              : paddingBottom === "none"
              ? "pb-0"
              : ""
          }

          ${
            paddingTop == "small"
              ? "pt-[40px]"
              : paddingTop === "medium"
              ? "pt-[60px]"
              : paddingTop === "large"
              ? "pt-[80px]"
              : paddingTop === "none"
              ? "pt-0"
              : ""
          }
          `}
    >
      {children}
    </div>
  );
};

export default PaddingContainer;
