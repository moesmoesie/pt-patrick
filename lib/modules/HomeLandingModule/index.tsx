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
import React from "react";

const HomeLandingModule: React.FC<z.infer<typeof HomeLandingModuleZod>> = (
  props
) => {
  const HeroText = React.memo(function WrapperHeroText() {
    return (
      <div className="mb-12 medium:col-[1/3] large:col-[1/2] large:mb-20">
        <h1 className="header-1 mb-8 font-bold medium:max-w-2xl large:min-w-[800px]">
          <RichText content={props.hero.title} />
        </h1>

        <p className="mb-8 font-overpass  text-[23px] leading-[36.8px] tracking-[0.02em] medium:max-w-2xl medium:text-[27px]">
          {props.hero.body}
        </p>

        <Button>{props.hero.callToAction}</Button>
      </div>
    );
  });

  const HeroImage = React.memo(function WrapperHeroImage() {
    return (
      <div className="relative z-50 col-[2/3] hidden h-full medium:row-[2/3] medium:block large:col-[2/3] large:row-[1/3]">
        <RadialBlur className="absolute left-1/2 top-1/3 hidden h-[700px] w-[700px] -translate-x-1/2 scale-[2] medium:block" />
        <Image
          alt={props.hero.image.alt ?? undefined}
          caption={props.hero.image.caption ?? undefined}
          asset={props.hero.image.asset}
          type="sanity"
          width={3000}
          objectFit="contain"
          className="z-[1000] h-full translate-x-10 medium:scale-150 large:scale-[1.15]"
        />
      </div>
    );
  });

  const Cards = React.memo(function WrapperCards() {
    return (
      <div className="relative z-[9999] col-[1/3] row-[2/3] max-w-none pb-20 medium:max-w-[500px] large:max-w-none">
        <RadialBlur className=" absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 scale-[1.6] opacity-70 medium:hidden" />
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
    );
  });

  return (
    <div className="overflow-hidden">
      <ModuleContainer
        color={props.backgroundColor}
        paddingTop={null}
        paddingBottom={null}
        hasSeperator={props.hasSeperator}
        id={props.module_identifier}
      >
        <div className="relative pt-20 medium:grid medium:grid-cols-2 large:grid-rows-[min-content,min-content] large:pt-24">
          <HeroText />
          <HeroImage />
          <Cards />
        </div>
      </ModuleContainer>
    </div>
  );
};

export default HomeLandingModule;
