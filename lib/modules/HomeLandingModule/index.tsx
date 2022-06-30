import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../components";
import { ModuleContainer, Card } from "../../components";
import { HomeLandingModuleZod } from "./types";
import { z } from "zod";

const HomeLandingModule: React.FC<z.infer<typeof HomeLandingModuleZod>> = (
  props
) => {
  return (
    <ModuleContainer>
      <div className="mb-12">
        <h1 className="font-rubik mb-8 font-bold text-[48px] leading-[48px]">
          {props.hero.title}
        </h1>

        <p className="font-overpass mb-8 text-[23px] leading-[36.8px] tracking-[0.02em]">
          {props.hero.body}
        </p>

        <Button>{props.hero.callToAction}</Button>
      </div>

      <div className="relative">
        {/* START BACKGROUND */}
        <div className="w-[280px] -right-36 top-20 h-[280px] bg-amethyst blur-[200px] absolute" />
        {/* END BACKGROUND */}
        <div className="flex flex-col relative gap-4">
          {props.cards.map((el) => {
            return (
              <Card
                key={el.key}
                icon={<FontAwesomeIcon icon={el.icon as any} />}
                title={el.title}
                body={el.body}
              />
            );
          })}
        </div>
      </div>
    </ModuleContainer>
  );
};

export default HomeLandingModule;
