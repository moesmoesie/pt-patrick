import CardProps from "./types";

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="shadow-1 rounded-[20px] border border-amethyst bg-white px-4 py-3 supports-backdrop-filter:bg-white/60 supports-backdrop-filter:backdrop-blur-lg large:px-5 large:py-6">
      <div className="mb-4 flex items-center">
        <div className="body-1 grid h-8 w-8 place-items-center rounded-full border border-amethyst text-amethyst large:h-10 large:w-10">
          {props.icon}
        </div>
        <p className="header-4 ml-4 font-bold">{props.title}</p>
      </div>
      <p className="body-2 pr-4">{props.body}</p>
    </div>
  );
};

export default Card;
