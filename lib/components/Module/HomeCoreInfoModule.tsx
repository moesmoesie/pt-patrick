import ModuleContainer from "../ModuleContainer";
import { useState, useEffect, useRef } from "react";
import { CorePillar } from "./types";

const corePillars: CorePillar[] = [
  {
    value: "Strenght",
    title: "Become Stronger",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio lorem euismod eu. Ipsum quis ipsum tellus eget. Nulla odio accumsan sit venenatis convallis gravida curabitur faucibus in. Luctus lectus neque amet maecenas habitasse nisi, mi purus tempus.",
    keywords: ["Powerlifting", "AMRAP", "Practical strenght"],
    image: "/assets/strenght.png",
  },

  {
    value: "Mobility",
    title: "Move Better",
    body: "Lorem ipsum dolor sit amet,lla odio accumsan sit venenatis convallis gravida curabitur faucibus in. Luctus lectus neque amet maecenas habitasse nisi, mi purus tempus.",
    keywords: ["Powerlifting"],
    image: "/assets/strenght.png",
  },

  {
    value: "Endurance",
    title: "Become Stronger",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio lorem euismod eu. Ipsum quis ipsum tellus eget. Nulla odio accumsan sit venenatis convallis gravida curabitur faucibus in. Luctus lectus neque amet maecenas habitasse nisi, mi purus tempus.",
    keywords: ["Powerlifting"],
    image: "/assets/strenght.png",
  },
];

const CoreInfoModule = () => {
  const [value, setValue] = useState<CorePillar>(corePillars[0]);

  return (
    <ModuleContainer>
      <div>
        <h2 className="header-2 font-bold mb-12">
          The right <span className="text-amethyst">goal</span> makes all the
          <span className="text-amethyst"> difference</span>
        </h2>

        <div className="w-full relative h-[290px] mb-12 overflow-hidden rounded-lg">
          <img
            src={value.image}
            alt="strenght"
            className="w-full h-full left-0 top-0 absolute object-cover"
          />

          <div className="w-full h-full bg-black  absolute left-0 top-0 opacity-25" />

          <ul className="absolute px-6 flex flex-col gap-5 top-1/2 -translate-y-1/2">
            {corePillars.map((el) => {
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
            return (
              <div
                key={el}
                className="bg-black text-white rounded-sm text-[16px] font-medium px-3 py-2 font-rubik tracking-[0.02em]"
              >
                {el}
              </div>
            );
          })}
        </ul>
      </div>
    </ModuleContainer>
  );
};

export default CoreInfoModule;
