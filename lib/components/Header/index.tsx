import HeaderProps from "./types";
import Container from "../Container";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="fixed top-0 left-0 z-[999] w-full border-b border-b-gray-300 bg-white">
      <Container>
        <div className="flex py-5">
          <img className="h-6" src="/assets/logo.png" alt="logo" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
