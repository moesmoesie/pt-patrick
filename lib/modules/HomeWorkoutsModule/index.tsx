import { HomeWorkoutsModuleProps, WorkoutProps } from "./types";
import {
  Container,
  Image,
  ContainerScroll,
  PaddingContainer,
} from "../../components";
import { Chip } from "../../components";
import { useState } from "react";
import RichText from "../../components/RichText";

const HomeWorkoutsModule: React.FC<HomeWorkoutsModuleProps> = (props) => {
  return (
    <PaddingContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
    >
      <div>
        <Container>
          <h2 className="header-2 mb-12 max-w-2xl font-bold">
            <RichText content={props.title} />
          </h2>
        </Container>

        <ContainerScroll className="h-[300px]">
          {props.workouts.map((el, index) => {
            return (
              <div
                key={index}
                className=" snap-center pr-5 last:pr-0 medium:snap-align-none"
              >
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
      className="relative flex h-[288px] w-[288px] min-w-[288px] flex-col items-start justify-end overflow-hidden rounded-lg"
    >
      <div className="absolute bottom-0 z-50 flex h-[222px] w-full flex-col items-start overflow-hidden rounded-lg p-6">
        {isActive && (
          <>
            <div className="absolute top-0 left-0 h-full w-full backdrop-blur-md" />
            <div className="absolute top-0 left-0 h-full w-full bg-white/95 supports-backdrop-filter:bg-white/60" />
            <div className="relative mb-[10px] flex flex-col items-start gap-[10px]">
              <Chip>{workout.name}</Chip>
              <p className="body-2">{workout.description}</p>
            </div>
          </>
        )}
      </div>

      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          type="sanity"
          width={300}
          alt={workout.image.alt ?? undefined}
          caption={workout.image.caption ?? undefined}
          asset={workout.image.asset}
          lqip={workout.image.lqip}
          objectFit="cover"
          className="absolute h-full w-full"
        />
      </div>

      <div className="relative ml-4 mb-4">
        <Chip>{workout.name}</Chip>
      </div>
    </div>
  );
};
export default HomeWorkoutsModule;
