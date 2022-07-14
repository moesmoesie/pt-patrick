import { PricingCardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PricingCard: React.FC<PricingCardProps> = (props) => {
  return (
    <div className={props.color}>
      <div
        className={`shadow-1 dark:text-white dark:bg-black rounded-lg space-y-5 px-6 py-8`}
      >
        <p className="body-3 bg-black dark:bg-white dark:text-black text-white inline-block px-[14px] py-[4px] rounded-sm">
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
                <div className="bg-black dark:bg-white w-[20px] grid -translate-y-px place-items-center h-[20px] rounded-full">
                  <FontAwesomeIcon
                    className="text-white dark:text-black text-[14px]"
                    icon={"check"}
                  />
                </div>
                <p className="body-2 dark:text-white text-gray-900">{e}</p>
              </li>
            );
          })}
        </ul>

        <button className="px-6 text-[16px] font-medium font-rubik leading-[1] py-3 border-[2px] dark:border-white rounded-sm border-black">
          {props.callToAction}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
