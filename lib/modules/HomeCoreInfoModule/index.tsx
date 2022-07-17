import { useState } from "react";
import { Chip, ModuleContainer, Image } from "../../components";
import RichText from "../../components/RichText";
import { HomeCoreInfoModuleProps, CorePillarProps } from "./types";

const CoreInfoModule: React.FC<HomeCoreInfoModuleProps> = (props) => {
  const [value, setValue] = useState<CorePillarProps>(props.corePillars[0]);

  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <div>
        <h2 className="header-2 mb-12 max-w-2xl font-bold large:mb-20">
          <RichText content={props.title} />
        </h2>
        <div className=" large:flex large:gap-14">
          <div className="hidden large:block">
            <div>
              <ul className=" flex  flex-col gap-11 pr-6">
                {props.corePillars.map((el) => {
                  return (
                    <li key={el.value}>
                      <button
                        onClick={() => setValue(el)}
                        className={`${
                          value.value === el.value
                            ? "text-black"
                            : "text-gray-500"
                        } header-3 font-bold`}
                      >
                        {el.value}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className="relative mb-12 h-[290px] w-full overflow-hidden rounded-lg medium:h-[350px] large:h-[350px]">
              <Image
                width={800}
                type="sanity"
                asset={value.image.asset}
                alt={value.image.alt ?? undefined}
                caption={value.image.caption ?? undefined}
                objectFit="cover"
                lqip={value.image.lqip}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute left-0 top-0  h-full w-full bg-black opacity-25" />

              <ul className="absolute top-1/2 flex -translate-y-1/2 flex-col gap-7 px-6 medium:gap-10 large:hidden">
                {props.corePillars.map((el) => {
                  return (
                    <li key={el.value}>
                      <button
                        onClick={() => setValue(el)}
                        className={`${
                          value.value === el.value
                            ? "text-white"
                            : "text-gray-500"
                        } header-3 font-bold`}
                      >
                        {el.value}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <h3 className="header-4 mb-8 font-bold text-black">
              {value.title}
            </h3>
            <p className="body-1  mb-9 text-gray-900 medium:mb-12">
              {value.body}
            </p>
            <ul className="flex flex-row flex-wrap gap-2">
              {value.keywords.map((el) => {
                return <Chip key={el}>{el}</Chip>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </ModuleContainer>
  );
};

export default CoreInfoModule;
