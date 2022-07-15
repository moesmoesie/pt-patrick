import { ContactModuleProps } from "./types";
import { ModuleContainer } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactModule: React.FC<ContactModuleProps> = (props) => {
  return (
    <ModuleContainer
      paddingTop={"none"}
      paddingBottom="medium"
      hasSeperator={true}
      color="#000000"
    >
      <div className="mt-10 text-white">
        <img
          className="h-[355px] w-full -translate-y-10 rounded-lg object-cover"
          alt="location"
          src="/assets/location.png"
        />
        <h2 className="header-2 mb-8 pr-4 font-bold">{props.title}</h2>
        <p className="body-1 mb-7">{props.body}</p>
        <div className="flex gap-5">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white">
            <FontAwesomeIcon
              className="text-[21px] text-white"
              icon={["fab", "whatsapp"]}
            />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white">
            <FontAwesomeIcon
              className="text-[21px] text-white"
              icon={["fas", "phone"]}
            />
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white">
            <FontAwesomeIcon
              className="text-[21px] text-white"
              icon={["fas", "envelope"]}
            />
          </button>
        </div>
      </div>
    </ModuleContainer>
  );
};

export default ContactModule;
