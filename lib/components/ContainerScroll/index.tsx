import Container from "../Container";
import ContainerScrollProps from "./types";

const ContainerScroll: React.FC<ContainerScrollProps> = (props) => {
  return (
    <div
      style={{
        height: props.height,
      }}
      className="relative hide-scrollbar overflow-x-scroll snap-x snap-mandatory"
    >
      <Container>
        <div className="flex absolute">{props.children}</div>
      </Container>
    </div>
  );
};

export default ContainerScroll;
