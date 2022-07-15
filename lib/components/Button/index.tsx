import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="leadning-[16px] rounded-sm bg-black px-9 py-3 font-rubik text-[16px] font-medium tracking-[2%] text-white">
      {props.children}
    </button>
  );
};

export default Button;
