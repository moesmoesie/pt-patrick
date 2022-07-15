import { useState } from "react";
import { Chip, ModuleContainer, Image } from "../../components";
import { HomeCoreInfoModuleProps, CorePillarProps } from "./types";

const CoreInfoModule: React.FC<HomeCoreInfoModuleProps> = (props) => {
  const [value, setValue] = useState<CorePillarProps>(props.corePillars[0]);

  return (
    <ModuleContainer color="#f0f0f0" hasSeperator={true}>
      <div>
        <h2 className="header-2 font-bold mb-12">{props.title}</h2>

        <div className="w-full relative h-[290px] mb-12 overflow-hidden rounded-lg">
          <Image
            width={400}
            type="sanity"
            asset={value.image.asset}
            alt={value.image.alt ?? undefined}
            caption={value.image.caption ?? undefined}
            objectFit="cover"
            lqip={value.image.lqip}
            className="w-full h-full left-0 top-0 absolute object-cover"
          />

          <div className="w-full h-full bg-black pointer-events-none  absolute left-0 top-0 opacity-25" />

          <ul className="absolute px-6 flex flex-col gap-5 top-1/2 -translate-y-1/2">
            {props.corePillars.map((el) => {
              return (
                <li key={el.value}>
                  <button
                    onClick={() => setValue(el)}
                    className={`${
                      value.value === el.value ? "text-white" : "text-gray-500"
                    } header-3 font-bold`}
                  >
                    {el.value}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <h3 className="text-black header-4 mb-9 font-bold">{value.title}</h3>
        <p className="body-1 mb-8 text-gray-900">{value.body}</p>
        <ul className="flex flex-wrap flex-row gap-2">
          {value.keywords.map((el) => {
            return <Chip key={el}>{el}</Chip>;
          })}
        </ul>
      </div>
    </ModuleContainer>
  );
};

export default CoreInfoModule;
