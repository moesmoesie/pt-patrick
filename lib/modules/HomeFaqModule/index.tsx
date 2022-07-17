import { HomeFaqModuleProps } from "./types";
import { ModuleContainer } from "../../components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RichText from "../../components/RichText";

const HomeFaqModule: React.FC<HomeFaqModuleProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingBottom={props.paddingBottom}
      paddingTop={props.paddingTop}
      hasSeperator={props.hasSeperator}
    >
      <div className="large:flex large:gap-10">
        <div className="flex-1">
          <h2 className="header-2 mb-12 font-bold">
            <RichText content={props.title} />
          </h2>
          <p className="body-1 mb-8 text-gray-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            mauris enim lectus amet, cursus odio vel eu, ut.
          </p>
        </div>

        <div className="flex flex-[2] flex-col gap-5">
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
          <p className="body-2 max-w-[625px] text-gray-900">{body}</p>
        </div>
      )}
    </button>
  );
};

export default HomeFaqModule;
