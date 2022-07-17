import { HomeReviewsModuleProps } from "./types";
import {
  PaddingContainer,
  Container,
  ContainerScroll,
  Image,
  RadialBlur,
} from "../../components";
import React, { useRef, useState } from "react";
import RichText from "../../components/RichText";
const HomeHighlightModudle: React.FC<HomeReviewsModuleProps> = (props) => {
  const element = useRef<HTMLDivElement>(null);
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <div className="overflow-hidden">
      <PaddingContainer
        paddingBottom={props.paddingBottom}
        paddingTop={props.paddingTop}
        color={props.backgroundColor}
        hasSeperator={props.hasSeperator || undefined}
      >
        <div className="relative">
          <RadialBlur className="absolute top-1/2 -right-16  -translate-y-1/2" />

          <div className="mb-10">
            <Container>
              <h2 className="header-2 max-w-2xl font-bold">
                <RichText content={props.title} />
              </h2>
            </Container>
          </div>

          <div>
            <ContainerScroll
              className="h-[600px] medium:h-[700px] large:h-[400px]"
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
                    <div className="min-w-[335px] overflow-hidden rounded-lg bg-white shadow-lg large:flex large:h-[300px]">
                      <div>
                        <Image
                          type="sanity"
                          alt={el.image.alt ?? undefined}
                          caption={el.image.caption ?? undefined}
                          width={800}
                          objectFit="cover"
                          className="h-[300px] w-full min-w-[300px] large:h-full"
                          asset={el.image.asset}
                        />
                      </div>

                      <div className="relative p-6 large:min-w-[450px] large:py-8 large:px-12">
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

                        <p className="body-1 font-bold text-black">
                          {el.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ContainerScroll>
          </div>
        </div>
      </PaddingContainer>
    </div>
  );
};

export default HomeHighlightModudle;
