import CardProps from "./types";

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="px-4 py-3 bg-white shadow-1 rounded-[20px] border border-amethyst">
      <div className="flex items-center mb-4">
        <div className="text-amethyst text-[16px] grid place-items-center border border-amethyst w-8 h-8 rounded-full">
          {props.icon}
        </div>
        <p className="header-4 ml-4 font-bold">{props.title}</p>
      </div>
      <p className="body-2">{props.body}</p>
    </div>
  );
};

export default Card;
