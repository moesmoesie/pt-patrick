import Container from "../Container";
import Card from "../Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";

const HomeLandingModule = () => {
  return (
    <Container>
      <div className="mb-12">
        <h1 className="font-rubik mb-8 font-bold text-[48px] leading-[48px]">
          The best part of your day <br />
          <span className="text-amethyst">- get fit here.</span>
        </h1>

        <p className="font-overpass mb-8 text-[23px] leading-[36.8px] tracking-[2%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          mauris enim lectus amet, cursus odio vel eu, ut.
        </p>

        <Button>Join Now</Button>
      </div>

      <div className="relative">
        {/* START BACKGROUND */}
        <div className="w-[280px] -right-36 top-20 h-[280px] bg-amethyst blur-[200px] absolute" />
        {/* END BACKGROUND */}
        <div className="flex flex-col relative gap-4">
          <Card
            icon={<FontAwesomeIcon icon={"clipboard"} />}
            title="Strategise"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum justo pharetra mi mattis vivamus turpis."
          />

          <Card
            icon={<FontAwesomeIcon icon={"user-check"} />}
            title="Personalise"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum justo pharetra mi mattis vivamus turpis."
          />

          <Card
            icon={<FontAwesomeIcon icon={"crosshairs"} />}
            title="Execute"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum justo pharetra mi mattis vivamus turpis."
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeLandingModule;
