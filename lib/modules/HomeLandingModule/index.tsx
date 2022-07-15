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

const HomeLandingModule: React.FC<z.infer<typeof HomeLandingModuleZod>> = (
  props
) => {
  return (
    <div className="overflow-hidden">
      <ModuleContainer
        color={props.backgroundColor}
        paddingTop={"none"}
        paddingBottom="none"
        hasSeperator={props.hasSeperator}
      >
        <div className="large:grid relative pt-20 large:pt-24 grid-cols-2 grid-rows-[min-content,min-content]">
          {/* HERO TEXT */}
          <div className="mb-12 large:mb-20">
            <h1 className="mb-8 header-1 large:min-w-[800px] font-bold">
              {props.hero.title}
            </h1>

            <p className="font-overpass mb-8 text-[23px] large:text-[27px] leading-[36.8px] tracking-[0.02em]">
              {props.hero.body}
            </p>

            <Button>{props.hero.callToAction}</Button>
          </div>
          {/* HERO IMAGE */}
          <div className="col-[2/3] row-[1/3] hidden large:block relative h-full">
            <RadialBlur className="w-[700px] scale-[2] absolute hidden large:block left-1/2 top-1/3 -translate-x-1/2 h-[700px]" />
            <Image
              alt={props.hero.image.alt ?? undefined}
              caption={props.hero.image.caption ?? undefined}
              asset={props.hero.image.asset}
              type="sanity"
              width={3000}
              className="h-full z-[1000] scale-[1.15]"
            />
          </div>
          {/* CARDS */}
          <div className="relative z-[9999] row-[2/3] col-[1/3] pb-20">
            {/* START BACKGROUND */}

            <RadialBlur className=" large:hidden opacity-70 left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[1.6] absolute" />

            {/* END BACKGROUND */}
            <div className="flex flex-col large:flex-row relative gap-4">
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
