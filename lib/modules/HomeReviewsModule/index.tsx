import { HomeReviewsModuleProps } from "./types";
import {
  PaddingContainer,
  Container,
  ContainerScroll,
  Image,
} from "../../components";
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
        <div className="absolute top-1/2 right-0 h-[170px] w-[170px] bg-amethyst blur-[120px]" />
        {/* END BACKGROUND */}

        <div className="mb-10">
          <Container>
            <p className="header-2 font-bold">{props.title}</p>
          </Container>
        </div>

        <div>
          <ContainerScroll
            className="h-[600px] large:h-[650px]"
            onScroll={(e) => {
              const level = Math.floor(
                (e.currentTarget.scrollLeft + 10) /
                  element.current?.clientWidth!
              );

              if (level != currentLevel) {
                setCurrentLevel(level);
              }
            }}
          >
            {props.reviews.map((el, index) => {
              return (
                <div
                  ref={index == 0 ? element : null}
                  key={index}
                  className="ml-5 snap-center first:ml-0 last:mr-5"
                >
                  <div className="min-w-[335px] overflow-hidden rounded-lg bg-white shadow-lg">
                    <Image
                      type="sanity"
                      alt={el.image.alt ?? undefined}
                      caption={el.image.caption ?? undefined}
                      width={400}
                      objectFit="cover"
                      className="w-full"
                      asset={el.image.asset}
                    />

                    <div className="relative p-6">
                      <p className="header-4 relative mb-7 whitespace-nowrap font-bold">
                        {el.name}
                      </p>

                      <div className="relative">
                        <p className=" header-1 absolute top-0 -translate-x-7 -translate-y-6 text-[150px] text-gray-400">
                          “
                        </p>

                        <p className=" header-1 absolute top-full right-0 origin-center translate-x-4 text-[150px] text-gray-400">
                          ”
                        </p>

                        <p className="body-1 relative right-0 mb-4 block text-gray-900">
                          {el.body}
                        </p>
                      </div>

                      <p className="body-1 font-bold text-black">{el.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ContainerScroll>
        </div>

        <div className="mt-2 flex w-full justify-center gap-2">
          {props.reviews.map((el, index) => {
            return (
              <div
                key={index}
                className={`
                ${currentLevel == index ? "w-8 bg-amethyst" : "w-3 bg-black"}
                h-3 rounded-full transition-all
            `}
              />
            );
          })}
        </div>
      </div>
    </PaddingContainer>
  );
};

export default HomeHighlightModudle;
