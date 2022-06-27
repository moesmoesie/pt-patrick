import ModuleContainerProps from "./types";
import { Container } from "../../components";

const ModuleContainer: React.FC<ModuleContainerProps> = ({ children }) => {
  return (
    <Container>
      <div className="my-20">{children}</div>
    </Container>
  );
};

export default ModuleContainer;
