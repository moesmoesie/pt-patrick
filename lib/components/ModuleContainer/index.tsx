import ModuleContainerProps from "./types";
import { Container, PaddingContainer } from "../../components";
const ModuleContainer: React.FC<ModuleContainerProps> = ({
  color,
  paddingBottom,
  paddingTop,
  hasSeperator = false,
  children,
  id,
}) => {
  return (
    <div
      style={{
        backgroundColor: color ?? "",
      }}
    >
      <Container>
        <PaddingContainer
          id={id}
          paddingBottom={paddingBottom}
          paddingTop={paddingTop}
        >
          {children}
        </PaddingContainer>
        <div>
          {hasSeperator && <div className="h-px w-full bg-gray-500/50" />}
        </div>
      </Container>
    </div>
  );
};

export default ModuleContainer;
