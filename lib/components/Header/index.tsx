import { HeaderProps } from "./types";
import Container from "../Container";
import Image from "../Image";
import Link from "next/link";
import { PageContext } from "../../contexts";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header: React.FC<HeaderProps> = (props) => {
  const page = useContext(PageContext);
  return (
    <div className="fixed top-0 left-0 z-[10000] w-full border-b border-b-gray-300 bg-white supports-backdrop-filter:bg-white/80 supports-backdrop-filter:backdrop-blur-xl">
      <Container>
        <div className="flex w-full py-5">
          <Link href={"/"}>
            <a>
              <Image
                width={400}
                type="sanity"
                asset={props.logo.asset}
                alt={props.logo.alt ?? ""}
                caption={props.logo.caption ?? ""}
                objectFit="contain"
                className="h-6"
              />
            </a>
          </Link>
          <nav className="ml-auto hidden medium:block">
            <ul className="flex gap-7 font-rubik font-medium">
              {props.menu.map((el, index) => {
                return (
                  <li key={index}>
                    <a className="whitespace-nowrap" href={`#${el.id}`}>
                      {el.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="ml-auto medium:hidden" />
          {page.preview && (
            <Link href="/api/exit-preview">
              <a className="ml-7 font-rubik font-medium text-white ">
                <p className="bg-amethyst px-3 medium:hidden large:block">
                  Exit Preview
                </p>
                <div className="hidden h-6 w-6 place-items-center rounded-full bg-amethyst text-white medium:grid large:hidden">
                  <FontAwesomeIcon icon={"multiply"} />
                </div>
              </a>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
