import HeaderProps from "./types";
import Container from "../Container";

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="w-full z-[999] bg-white fixed top-0 left-0">
      <div className="flex border-b border-b-gray-300 px-2 py-5">
        <img className="h-6" src="/assets/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
