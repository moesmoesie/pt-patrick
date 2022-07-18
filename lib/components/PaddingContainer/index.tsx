import PaddingContainerProps from "./types";

const PaddingContainer: React.FC<PaddingContainerProps> = ({
  color,
  paddingBottom,
  paddingTop,
  hasSeperator = false,
  children,
  id,
}) => {
  return (
    <div className="scroll-mt-12" id={id}>
      <div
        style={{
          background: color ?? "",
        }}
        className={`relative 
        pt-${paddingTop?.small} medium:pt-${paddingTop?.medium} large:pt-${paddingTop?.large} 
        pb-${paddingBottom?.small} medium:pb-${paddingBottom?.medium} large:pb-${paddingBottom?.large} `}
      >
        {children}
      </div>
      {hasSeperator && <div className="h-px w-full bg-gray-500/50" />}
    </div>
  );
};

export default PaddingContainer;
