import Container from "../Container";

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

        <button className="bg-black font-rubik font-medium text-[16px] tracking-[2%] leadning-[16px] px-6 py-3 rounded-sm text-white">
          Join now
        </button>
      </div>

      <div className="relative">
        {/* START BACKGROUND */}
        <div className="w-[280px] -right-36 top-20 h-[280px] bg-amethyst blur-[200px] absolute" />
        {/* END BACKGROUND */}
        <div className="flex flex-col relative gap-4">
          <div className="px-4 py-3 bg-white shadow-1 rounded-[20px] border border-amethyst">
            <p className="header-4 mb-4 font-bold">Strategise</p>
            <p className="body-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum justo pharetra mi mattis vivamus turpis.
            </p>
          </div>

          <div className="px-4 py-3 bg-white shadow-1 rounded-[20px] border border-amethyst">
            <p className="header-4 mb-4 font-bold">Strategise</p>
            <p className="body-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum justo pharetra mi mattis vivamus turpis.
            </p>
          </div>

          <div className="px-4 py-3 bg-white shadow-1 rounded-[20px] border border-amethyst">
            <p className="header-4 mb-4 font-bold">Strategise</p>
            <p className="body-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              elementum justo pharetra mi mattis vivamus turpis.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeLandingModule;
