import RadialBlurProps from "./types";

const RadialBlur: React.FC<RadialBlurProps> = ({ className }) => {
  return (
    <img
      alt="gradient"
      src="/assets/gradients/medium.png"
      className={`${className} bg-cover pointer-events-none`}
    />
  );
};

export default RadialBlur;
