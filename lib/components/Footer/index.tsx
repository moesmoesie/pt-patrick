import { Container } from "../../components";
import { ModuleContainer } from "../../components";
const Footer: React.FC = () => {
  return (
    <ModuleContainer paddingTop="small" paddingBottom="small" color="#000000">
      <footer>
        <nav className="text-white mb-6 body-2">
          <ul className="flex gap-x-6 gap-y-2 flex-wrap">
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
          All rights reserved <span className="text-amethyst">gym.ly</span>
        </p>
      </footer>
    </ModuleContainer>
  );
};

export default Footer;
