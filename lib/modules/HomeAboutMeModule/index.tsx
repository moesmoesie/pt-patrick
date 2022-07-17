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
      <div className="grid gap-y-8 medium:grid-cols-2 medium:grid-rows-[min-content,min-content] medium:gap-10 large:gap-12 large:gap-x-28">
        <div className="medium:row[1/2] relative large:row-[2/3] large:min-w-[450px]">
          <div className="relative large:-translate-y-10">
            <Image
              type="sanity"
              width={1000}
              className=" aspect-square w-[99%] overflow-hidden rounded-full large:-mt-20 "
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

        <h2 className="header-2 font-bold medium:col-[1/2] medium:row-[1/2] medium:max-w-[350px]  medium:self-end large:max-w-none">
          <RichText content={props.title} />
        </h2>
        <p className="font-overpass text-[23px] leading-[1.6] tracking-[0.02em] medium:col-[1/3] medium:text-[27px] large:col-[1/2] large:row-[2/3] ">
          {props.body}
        </p>
      </div>
    </ModuleContainer>
  );
};

export default HomeAboutMeModule;
