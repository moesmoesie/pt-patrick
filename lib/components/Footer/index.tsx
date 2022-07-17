import { Container } from "../../components";
import { ModuleContainer } from "../../components";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10">
      <ModuleContainer paddingTop={null} paddingBottom={null}>
        <nav className="body-2 mb-6 text-white">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
          </ul>
        </nav>
        <p className="body-2 text-white">
          All rights reserved{" "}
          <span className="text-amethyst large:pt-1">gym.ly</span>
        </p>
      </ModuleContainer>
    </footer>
  );
};

export default Footer;
