import { HomeFaqModuleProps } from "./types";
import { ModuleContainer } from "../../components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const questions = [
  {
    title: "How can I book a workout class?",
    body: "Booking a workout classe is simple for our members. Simply log into your Gymme account on our website and click.",
  },
  {
    title: "Is there water available at the gym?",
    body: "Booking a workout classe is simple for our members. Simply log into your Gymme account on our website and click.",
  },
  {
    title: "Is there water available at the gym?",
    body: "Booking a workout classe is simple for our members. Simply log into your Gymme account on our website and click.",
  },
];

const HomeFaqModule: React.FC<HomeFaqModuleProps> = (props) => {
  return (
    <ModuleContainer>
      <div>
        <h2 className="header-2 mb-12 font-bold">{props.title}</h2>
        <p className="body-1 text-gray-900 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          mauris enim lectus amet, cursus odio vel eu, ut.{" "}
        </p>
        <div className="flex flex-col gap-5">
          {questions.map((e, index) => {
            return <Question key={index} title={e.title} body={e.body} />;
          })}
        </div>
      </div>
    </ModuleContainer>
  );
};

const Question: React.FC<{ title: string; body: string }> = ({
  title,
  body,
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className="p-5 flex  flex-col text-left border rounded-sm border-gray-400 "
    >
      <div className="flex items-center gap-3">
        <p className="body-1 font-bold">{title}</p>
        <div
          className={`${
            active ? "rotate-180" : "rotate-0"
          } transition-transform min-w-[22px] grid place-items-center min-h-[22px] rounded-full bg-black`}
        >
          <FontAwesomeIcon
            className="text-white text-[12px]"
            icon={"chevron-down"}
          />
        </div>
      </div>

      {active && (
        <div className="origin-top mt-5 transition-all ">
          <p className="body-2">{body}</p>
        </div>
      )}
    </button>
  );
};

export default HomeFaqModule;
