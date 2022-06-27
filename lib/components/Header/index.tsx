import HeaderProps from "./types";
import Container from "../Container";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full fixed top-0 left-0 min-h-[5rem]">
      <Container>
        <div className="flex py-5">
          <img className="h-6" src="/assets/logo.png" alt="logo" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
