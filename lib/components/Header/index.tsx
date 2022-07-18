import { HeaderProps } from "./types";
import Container from "../Container";

const links = [
  { id: "", title: "Home" },
  { id: "", title: "Services" },
  { id: "", title: "Reviews" },
  { id: "", title: "Facility" },
  { id: "", title: "Pricing" },
  { id: "", title: "Contact" },
];

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className="fixed top-0 left-0 z-[10000] w-full border-b border-b-gray-300 bg-white supports-backdrop-filter:bg-white/80 supports-backdrop-filter:backdrop-blur-xl">
      <Container>
        <div className="flex w-full py-5">
          <img className="h-6" src="/assets/logo.png" alt="logo" />
          <nav className="ml-auto hidden medium:block">
            <ul className="flex gap-7 font-rubik font-medium">
              {props.menu.map((el, index) => {
                return (
                  <li key={index}>
                    <a href={`#${el.id}`}>{el.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
