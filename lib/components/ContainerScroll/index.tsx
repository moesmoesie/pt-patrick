import Container from "../Container";
import ContainerScrollProps from "./types";

const ContainerScroll: React.FC<ContainerScrollProps> = (props) => {
  return (
    <div
      onScroll={props.onScroll}
      className={`${props.className} hide-scrollbar relative snap-x snap-mandatory overflow-x-scroll`}
    >
      <Container>
        <div className="absolute flex">{props.children}</div>
      </Container>
    </div>
  );
};

export default ContainerScroll;
