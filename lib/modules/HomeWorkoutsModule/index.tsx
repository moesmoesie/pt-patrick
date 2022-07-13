import { HomeWorkoutsModuleProps, WorkoutProps } from "./types";
import { ModuleContainer } from "../../components";
import { Chip } from "../../components";
import { useState } from "react";

const HomeWorkoutsModule: React.FC<HomeWorkoutsModuleProps> = (props) => {
  return (
    <ModuleContainer>
      <div>
        <h2 className="header-2 font-bold mb-12">{props.title}</h2>
        <div className="flex w-full gap-4 pb-4 overflow-x-scroll">
          {props.workouts.map((el, index) => {
            return <WorkoutCard key={index} {...el} />;
          })}
        </div>
      </div>
    </ModuleContainer>
  );
};

const WorkoutCard: React.FC<WorkoutProps> = (workout) => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onClick={() => {
        setActive(!isActive);
      }}
      className="w-[288px] relative items-start flex flex-col justify-end min-w-[288px] bg-green h-[288px] overflow-hidden rounded-lg"
    >
      <div className="w-full flex overflow-hidden flex-col items-start p-6 rounded-lg z-50 h-[222px] absolute bottom-0">
        {isActive && (
          <>
            <div className="w-full h-full absolute top-0 left-0 backdrop-blur-md" />
            <div className="w-full h-full absolute top-0 left-0 bg-white/95 supports-backdrop-filter:bg-white/60" />
            <div className="relative flex gap-[10px] flex-col items-start mb-[10px]">
              <Chip>{workout.name}</Chip>
              <p className="body-2">{workout.description}</p>
            </div>
          </>
        )}
      </div>
      <img
        alt="Running"
        src="assets/sport.png"
        className="w-full h-full absolute left-0"
      />
      <div className="ml-4 relative mb-4">
        <Chip>{workout.name}</Chip>
      </div>
    </div>
  );
};
export default HomeWorkoutsModule;
