import { HomeFaqModuleProps } from "./types";
import { ModuleContainer } from "../../components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeFaqModule: React.FC<HomeFaqModuleProps> = (props) => {
  return (
    <ModuleContainer paddingTop="none">
      <div>
        <h2 className="header-2 mb-12 font-bold">{props.title}</h2>
        <p className="body-1 mb-8 text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          mauris enim lectus amet, cursus odio vel eu, ut.{" "}
        </p>
        <div className="flex flex-col gap-5">
          {props.questions.map((e, index) => {
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
      className="flex flex-col  rounded-sm border border-gray-400 p-5 text-left "
    >
      <div className="flex w-full items-center justify-between gap-3">
        <p className="body-1 font-bold">{title}</p>
        <div
          className={`${
            active ? "rotate-180" : "rotate-0"
          } grid min-h-[22px] min-w-[22px] place-items-center rounded-full bg-black transition-transform`}
        >
          <FontAwesomeIcon
            className="text-[12px] text-white"
            icon={"chevron-down"}
          />
        </div>
      </div>

      {active && (
        <div className="mt-5 origin-top transition-all ">
          <p className="body-2">{body}</p>
        </div>
      )}
    </button>
  );
};

export default HomeFaqModule;
