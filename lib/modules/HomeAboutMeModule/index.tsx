import { ModuleContainer, Chip, Image } from "../../components";
import { HomeAboutMeProps } from "./types";

const HomeAboutMeModule: React.FC<HomeAboutMeProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <div className="relative">
        <Image
          type="sanity"
          width={1000}
          className=" rounded-full overflow-hidden aspect-square mb-12 w-[99%]"
          lqip={props.image.lqip}
          objectFit="cover"
          asset={props.image.asset}
          alt={props.image.alt ?? undefined}
          caption={props.image.caption ?? undefined}
        />

        <div className="absolute bottom-8 left-8">
          <Chip>{props.name}</Chip>
        </div>
      </div>

      <h2 className="header-2 font-bold  mb-8">{props.title}</h2>
      <p className="font-overpass text-[23px] leading-[36.8px] tracking-[0.02em]">
        {props.body}
      </p>
    </ModuleContainer>
  );
};

export default HomeAboutMeModule;
