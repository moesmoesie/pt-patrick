import { HomeReviewsModuleProps } from "./types";
import { PaddingContainer, Container, ContainerScroll } from "../../components";
import React, { useRef, useState } from "react";
const HomeHighlightModudle: React.FC<HomeReviewsModuleProps> = (props) => {
  const element = useRef<HTMLDivElement>(null);
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <PaddingContainer
      paddingBottom={props.paddingBottom}
      paddingTop={props.paddingTop}
      color={props.backgroundColor}
    >
      <div className="relative">
        {/* START BACKGROUND */}
        <div className="w-[170px] top-1/2 right-0 h-[170px] bg-amethyst blur-[120px] absolute" />
        {/* END BACKGROUND */}

        <div className="mb-10">
          <Container>
            <p className="header-2 font-bold">{props.title}</p>
          </Container>
        </div>

        <div>
          <ContainerScroll
            onScroll={(e) => {
              const level = Math.floor(
                (e.currentTarget.scrollLeft + 10) /
                  element.current?.clientWidth!
              );

              if (level != currentLevel) {
                setCurrentLevel(level);
              }
            }}
            height="600px"
          >
            {[1, 2, 3, 4, 5].map((el, index) => {
              return (
                <div
                  ref={index == 0 ? element : null}
                  key={index}
                  className="first:ml-0 ml-5 snap-center last:pr-5"
                >
                  <div className="bg-white overflow-hidden rounded-lg shadow-lg min-w-[335px]">
                    <img
                      alt="Reviewer"
                      className="w-full"
                      src="/assets/reviewer.png"
                    />
                    <div className="p-6 relative">
                      <p className="header-4 relative mb-7 whitespace-nowrap font-bold">
                        Edward Salvadore
                      </p>

                      <div className="relative">
                        <p className=" header-1 absolute top-0 text-[150px] -translate-x-7 -translate-y-6 text-gray-400">
                          “
                        </p>

                        <p className=" header-1 absolute translate-x-4 top-full right-0 text-[150px] origin-center text-gray-400">
                          ”
                        </p>

                        <p className="text-gray-900 block body-1 relative right-0 mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sagittis, mauris, senectus semper ac justo.
                        </p>
                      </div>

                      <p className="body-1 font-bold text-black">
                        Construction worker
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ContainerScroll>
        </div>

        <Picker currentLevel={currentLevel} />
      </div>
    </PaddingContainer>
  );
};

const Picker: React.FC<{ currentLevel: number }> = (props) => {
  return (
    <div className="flex w-full justify-center mt-2 gap-2">
      {[1, 2, 3, 4, 5].map((el, index) => {
        return (
          <div
            key={index}
            className={`
                ${
                  props.currentLevel == index
                    ? "w-8 bg-amethyst"
                    : "w-3 bg-black"
                }
                h-3 rounded-full transition-all
            `}
          />
        );
      })}
    </div>
  );
};

export default HomeHighlightModudle;
