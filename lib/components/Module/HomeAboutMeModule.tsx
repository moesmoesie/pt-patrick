import { ModuleContainer } from "../../components";

const HomeAboutMeModule = () => {
  return (
    <div className="bg-gray-300">
      <ModuleContainer>
        <div className="py-20">
          <div className="relative">
            <img
              src="/assets/portrait.png"
              alt="Trainer"
              className="max-w-[335px] mb-12 rounded-full"
            />
            <div className="absolute bottom-4 left-4">
              <p className="font-overpass text-white font-bold text-[21px] tracking-[0.02em] rounded-sm px-4 py-3 bg-black">
                John Caboosi
              </p>
            </div>
          </div>

          <h2 className="header-2 font-bold  mb-8">
            Get to know <span className="text-amethyst">me</span>
          </h2>
          <p className="font-overpass text-[23px] leading-[36.8px] tracking-[2%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </ModuleContainer>
    </div>
  );
};

export default HomeAboutMeModule;
