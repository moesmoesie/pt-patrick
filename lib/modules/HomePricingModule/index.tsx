import { HomePricingModuleProps } from "./types";
import { ModuleContainer, PricingCard } from "../../components";
import RichText from "../../components/RichText";

const HomePricingModule: React.FC<HomePricingModuleProps> = (props) => {
  return (
    <ModuleContainer
      color={props.backgroundColor}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      hasSeperator={props.hasSeperator}
      id={props.module_identifier}
    >
      <h2 className="header-2 mb-12 max-w-2xl font-bold">
        <RichText content={props.title} />
      </h2>
      <div className="flex flex-col gap-6 large:flex-row">
        {props.pricingList.map((el, index) => {
          return (
            <PricingCard
              key={index}
              color={index === 1 ? "dark" : "light"}
              tag={el.caption}
              price={el.price}
              priceTagline={el.priceSubtitle}
              body={el.body}
              bulletPoints={el.bulletPoints}
              callToAction={el.callToAction}
            />
          );
        })}
      </div>
    </ModuleContainer>
  );
};

export default HomePricingModule;
