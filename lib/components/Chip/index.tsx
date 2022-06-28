import ChipProps from "./types";

const Chip: React.FC<ChipProps> = (props) => {
  return (
    <div className="bg-black text-white rounded-sm text-[16px] font-medium px-3 py-2 font-rubik tracking-[0.02em]">
      {props.children}
    </div>
  );
};

export default Chip;
