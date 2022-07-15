import ChipProps from "./types";

const Chip: React.FC<ChipProps> = (props) => {
  return (
    <div className="rounded-sm bg-black px-3 py-2 font-rubik text-[16px] font-medium tracking-[0.02em] text-white">
      {props.children}
    </div>
  );
};

export default Chip;
