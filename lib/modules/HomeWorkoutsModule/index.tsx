import { HomeWorkoutsModuleProps, WorkoutProps } from "./types";
import {
  Container,
  Image,
  ContainerScroll,
  PaddingContainer,
} from "../../components";
import { Chip } from "../../components";
import { useState } from "react";

const HomeWorkoutsModule: React.FC<HomeWorkoutsModuleProps> = (props) => {
  return (
    <PaddingContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
    >
      <div>
        <Container>
          <h2 className="header-2 font-bold mb-12">{props.title}</h2>
        </Container>

        <ContainerScroll className="h-[300px]">
          {props.workouts.map((el, index) => {
            return (
              <div key={index} className="first:ml-0 ml-6 last:mr-6">
                <WorkoutCard {...el} />
              </div>
            );
          })}
        </ContainerScroll>
      </div>
    </PaddingContainer>
  );
};

const WorkoutCard: React.FC<WorkoutProps> = (workout) => {
  const [isActive, setActive] = useState(false);

  return (
    <div
      onClick={() => {
        setActive(!isActive);
      }}
      className="w-[288px] relative items-start flex flex-col justify-end min-w-[288px] h-[288px] overflow-hidden rounded-lg"
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

      <div className="absolute w-full h-full top-0 left-0">
        <Image
          type="sanity"
          width={300}
          alt={workout.image.alt ?? undefined}
          caption={workout.image.caption ?? undefined}
          asset={workout.image.asset}
          lqip={workout.image.lqip}
          objectFit="cover"
          className="w-full h-full absolute"
        />
      </div>

      <div className="ml-4 relative mb-4">
        <Chip>{workout.name}</Chip>
      </div>
    </div>
  );
};
export default HomeWorkoutsModule;
