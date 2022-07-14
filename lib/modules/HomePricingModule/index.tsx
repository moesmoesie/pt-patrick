import { HomePricingModuleProps } from "./types";
import { ModuleContainer, PricingCard } from "../../components";

const HomePricingModule: React.FC<HomePricingModuleProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
    >
      <h2 className="header-2 font-bold mb-12">{props.title}</h2>
      <div className="flex flex-col gap-6">
        <PricingCard
          color="light"
          tag="Group Training"
          price="30"
          priceTagline="Per person"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, aliquet cursus nam quam egestas nibh vel pellentesque molestie. Feugiat nunc in ac porta dolor vestibulum, id hendrerit lorem. Felis."
          bulletPoints={[
            "Personal Training",
            "Fitness consultation",
            "1 training programs",
          ]}
          callToAction="Join now"
        />

        <PricingCard
          color="dark"
          tag="Group Training"
          price="30"
          priceTagline="Per person"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, aliquet cursus nam quam egestas nibh vel pellentesque molestie. Feugiat nunc in ac porta dolor vestibulum, id hendrerit lorem. Felis."
          bulletPoints={[
            "Personal Training",
            "Fitness consultation",
            "1 training programs",
          ]}
          callToAction="Join now"
        />

        <PricingCard
          color="light"
          tag="Group Training"
          price="30"
          priceTagline="Per person"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, aliquet cursus nam quam egestas nibh vel pellentesque molestie. Feugiat nunc in ac porta dolor vestibulum, id hendrerit lorem. Felis."
          bulletPoints={[
            "Personal Training",
            "Fitness consultation",
            "1 training programs",
          ]}
          callToAction="Join now"
        />
      </div>
    </ModuleContainer>
  );
};

export default HomePricingModule;
