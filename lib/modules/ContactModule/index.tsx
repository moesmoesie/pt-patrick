import { ContactModuleProps } from "./types";
import { Image, ModuleContainer } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactModule: React.FC<ContactModuleProps> = (props) => {
  return (
    <ModuleContainer
      paddingTop={"none"}
      paddingBottom={"none"}
      hasSeperator={props.hasSeperator}
      color="#000000"
    >
      <div className="mt-10 text-white large:flex large:gap-28">
        <div>
          <Image
            alt={props.image.alt ?? undefined}
            caption={props.image.caption ?? undefined}
            asset={props.image.asset}
            type={"sanity"}
            width={600}
            className="h-[355px] w-full -translate-y-10 overflow-hidden rounded-lg object-cover large:h-full large:min-w-[650px]"
          />
        </div>

        <div className="large:py-28">
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
      </div>
    </ModuleContainer>
  );
};

export default ContactModule;
