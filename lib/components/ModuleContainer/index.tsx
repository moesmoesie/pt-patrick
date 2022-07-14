import ModuleContainerProps from "./types";
import { Container, PaddingContainer } from "../../components";
const ModuleContainer: React.FC<ModuleContainerProps> = ({
  color,
  paddingBottom = "medium",
  paddingTop = "medium",
  hasSeperator = false,
  children,
}) => {
  return (
    <div
      style={{
        backgroundColor: color ?? "",
      }}
    >
      <Container>
        <PaddingContainer paddingBottom={paddingBottom} paddingTop={paddingTop}>
          {children}
        </PaddingContainer>
        <div>
          {hasSeperator && <div className="w-full h-px bg-gray-500/50" />}
        </div>
      </Container>
    </div>
  );
};

export default ModuleContainer;
