import { PricingCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PricingCard: React.FC<PricingCardProps> = (props) => {
  return (
    <div className={props.color}>
      <div
        className={`shadow-1 space-y-5 rounded-lg px-6 py-8 dark:bg-black dark:text-white`}
      >
        <p className="body-3 inline-block rounded-sm bg-black px-[14px] py-[4px] text-white dark:bg-white dark:text-black">
          {props.tag}
        </p>
        <p className="header-3 flex items-baseline font-bold">
          <span>{props.price}</span> <span className="header-5">€</span>
        </p>
        <p className="body-2">{props.body}</p>

        <ul className="grid gap-2">
          {props.bulletPoints.map((e, index) => {
            return (
              <li className="flex items-center gap-[10px] " key={index}>
                <div className="grid h-[20px] w-[20px] -translate-y-px place-items-center rounded-full bg-black dark:bg-white">
                  <FontAwesomeIcon
                    className="text-[14px] text-white dark:text-black"
                    icon={"check"}
                  />
                </div>
                <p className="body-2 text-gray-900 dark:text-white">{e}</p>
              </li>
            );
          })}
        </ul>

        <button className="rounded-sm border-[2px] border-black px-6 py-3 font-rubik text-[16px] font-medium leading-[1] dark:border-white">
          {props.callToAction}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
