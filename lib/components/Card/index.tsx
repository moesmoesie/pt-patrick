import CardProps from "./types";

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="px-4 py-3 supports-backdrop-filter:bg-white/60 supports-backdrop-filter:backdrop-blur-lg large:px-5 large:py-6 bg-white shadow-1 rounded-[20px] border border-amethyst">
      <div className="flex items-center mb-4">
        <div className="text-amethyst body-1 grid place-items-center border border-amethyst large:w-10 large:h-10 w-8 h-8 rounded-full">
          {props.icon}
        </div>
        <p className="header-4 ml-4 font-bold">{props.title}</p>
      </div>
      <p className="body-2 pr-4">{props.body}</p>
    </div>
  );
};

export default Card;
