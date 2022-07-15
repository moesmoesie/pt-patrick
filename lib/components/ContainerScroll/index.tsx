import Container from "../Container";
import ContainerScrollProps from "./types";

const ContainerScroll: React.FC<ContainerScrollProps> = (props) => {
  return (
    <div
      onScroll={props.onScroll}
      className={`${props.className} relative hide-scrollbar overflow-x-scroll snap-x snap-mandatory`}
    >
      <Container>
        <div className="flex absolute">{props.children}</div>
      </Container>
    </div>
  );
};

export default ContainerScroll;
