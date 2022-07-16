import { ModuleContainer, Chip, Image, RadialBlur } from "../../components";
import RichText from "../../components/RichText";
import { HomeAboutMeProps } from "./types";

const HomeAboutMeModule: React.FC<HomeAboutMeProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <div className="flex flex-col large:flex-row-reverse large:gap-28 large:pt-16">
        <div className="relative large:min-w-[450px]">
          <div className="relative large:-translate-y-10">
            <Image
              type="sanity"
              width={1000}
              className=" mb-12 aspect-square w-[99%] overflow-hidden rounded-full"
              lqip={props.image.lqip}
              objectFit="cover"
              asset={props.image.asset}
              alt={props.image.alt ?? undefined}
              caption={props.image.caption ?? undefined}
            />

            <RadialBlur className="absolute top-1/2 -z-10 -translate-y-1/3 -translate-x-1/4 scale-150 opacity-50" />

            <div className="absolute top-[80%] -left-1 large:-left-6 large:top-[70%]">
              <Chip>{props.name}</Chip>
            </div>
          </div>
        </div>

        <div className="large:flex-2">
          <h2 className="header-2 mb-8  font-bold">
            <RichText content={props.title} />
          </h2>
          <p className="font-overpass text-[23px] leading-[1.6] tracking-[0.02em] medium:text-[27px] ">
            {props.body}
          </p>
        </div>
      </div>
    </ModuleContainer>
  );
};

export default HomeAboutMeModule;
