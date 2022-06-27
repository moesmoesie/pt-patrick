import ButtonProps from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="bg-black font-rubik font-medium text-[16px] tracking-[2%] leadning-[16px] px-6 py-3 rounded-sm text-white">
      {props.children}
    </button>
  );
};

export default Button;
