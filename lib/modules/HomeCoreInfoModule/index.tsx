import { useState } from "react";
import { Chip, ModuleContainer, Image } from "../../components";
import { HomeCoreInfoModuleProps, CorePillarProps } from "./types";

const CoreInfoModule: React.FC<HomeCoreInfoModuleProps> = (props) => {
  const [value, setValue] = useState<CorePillarProps>(props.corePillars[0]);

  return (
    <ModuleContainer color="#f0f0f0" hasSeperator={true}>
      <div>
        <h2 className="header-2 mb-12 font-bold">{props.title}</h2>

        <div className="relative mb-12 h-[290px] w-full overflow-hidden rounded-lg">
          <Image
            width={400}
            type="sanity"
            asset={value.image.asset}
            alt={value.image.alt ?? undefined}
            caption={value.image.caption ?? undefined}
            objectFit="cover"
            lqip={value.image.lqip}
            className="absolute left-0 top-0 h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute left-0 top-0  h-full w-full bg-black opacity-25" />

          <ul className="absolute top-1/2 flex -translate-y-1/2 flex-col gap-5 px-6">
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

        <h3 className="header-4 mb-9 font-bold text-black">{value.title}</h3>
        <p className="body-1 mb-8 text-gray-900">{value.body}</p>
        <ul className="flex flex-row flex-wrap gap-2">
          {value.keywords.map((el) => {
            return <Chip key={el}>{el}</Chip>;
          })}
        </ul>
      </div>
    </ModuleContainer>
  );
};

export default CoreInfoModule;
