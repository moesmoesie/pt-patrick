import HeaderProps from "./types";
import Container from "../Container";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full z-[999] bg-white fixed top-0 border-b border-b-gray-300 left-0">
      <Container>
        <div className="flex py-5">
          <img className="h-6" src="/assets/logo.png" alt="logo" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
