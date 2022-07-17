import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ModuleContainer,
  Button,
  Image,
  Card,
  RadialBlur,
} from "../../components";
import { HomeLandingModuleZod } from "./types";
import { z } from "zod";
import RichText from "../../components/RichText";

const HomeLandingModule: React.FC<z.infer<typeof HomeLandingModuleZod>> = (
  props
) => {
  return (
    <div className="overflow-hidden">
      <ModuleContainer
        color={props.backgroundColor}
        paddingTop={null}
        paddingBottom={null}
        hasSeperator={props.hasSeperator}
      >
        <div className="relative grid-cols-2 grid-rows-[min-content,min-content] pt-20 large:grid large:pt-24">
          {/* HERO TEXT */}
          <div className="mb-12 large:mb-20">
            <h1 className="header-1 mb-8 font-bold large:min-w-[800px]">
              <RichText content={props.hero.title} />
            </h1>

            <p className="mb-8 font-overpass text-[23px] leading-[36.8px] tracking-[0.02em] large:text-[27px]">
              {props.hero.body}
            </p>

            <Button>{props.hero.callToAction}</Button>
          </div>
          {/* HERO IMAGE */}
          <div className="relative col-[2/3] row-[1/3] hidden h-full large:block">
            <RadialBlur className="absolute left-1/2 top-1/3 hidden h-[700px] w-[700px] -translate-x-1/2 scale-[2] large:block" />
            <Image
              alt={props.hero.image.alt ?? undefined}
              caption={props.hero.image.caption ?? undefined}
              asset={props.hero.image.asset}
              type="sanity"
              width={3000}
              className="z-[1000] h-full scale-[1.15]"
            />
          </div>
          {/* CARDS */}
          <div className="relative z-[9999] col-[1/3] row-[2/3] pb-20">
            {/* START BACKGROUND */}

            <RadialBlur className=" absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[1.6] opacity-70 large:hidden" />

            {/* END BACKGROUND */}
            <div className="relative flex flex-col gap-4 large:flex-row">
              {props.cards.map((el) => {
                return (
                  <Card
                    key={el.key}
                    icon={
                      <FontAwesomeIcon
                        icon={[el.icon.package, el.icon.name] as any}
                      />
                    }
                    title={el.title}
                    body={el.body}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </ModuleContainer>
    </div>
  );
};

export default HomeLandingModule;
