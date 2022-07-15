import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "../../components";
import { ModuleContainer, Card } from "../../components";
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
          <div className="mb-12 large:mb-20">
            <h1 className="mb-8 header-1 large:min-w-[800px] font-bold">
              {props.hero.title}
            </h1>

            <p className="font-overpass mb-8 text-[23px] large:text-[27px] leading-[36.8px] tracking-[0.02em]">
              {props.hero.body}
            </p>

            <Button>{props.hero.callToAction}</Button>
          </div>

          <div
            style={{
              gridColumn: "2/3",
              gridRow: "1 / 3",
            }}
            className="col-span-1 hidden large:block relative h-full"
          >
            <div className="w-[400px] hidden large:block left-1/2 top-1/2 -translate-x-1/2  h-[400px] bg-amethyst blur-[150px] absolute" />

            <Image
              alt=""
              caption=""
              asset={props.hero.image.asset}
              type="sanity"
              width={3000}
              className="h-full scale-[1.15]"
            />
          </div>

          <div
            style={{
              gridRow: "2 / 3",
              gridColumn: "1/3",
            }}
            className="relative pb-20"
          >
            {/* START BACKGROUND */}
            <div className="w-[280px] large:hidden -right-36 top-20 h-[280px] bg-amethyst blur-[150px] absolute" />
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
