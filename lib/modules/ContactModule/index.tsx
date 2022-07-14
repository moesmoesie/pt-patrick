import { ContactModuleProps } from "./types";
import { Container } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactModule: React.FC<ContactModuleProps> = (props) => {
  return (
    <div className="bg-black text-white mt-10  pb-20">
      <Container>
        <img
          className="w-full object-cover h-[355px] rounded-lg -translate-y-10"
          alt="location"
          src="/assets/location.png"
        />
        <h2 className="header-2 mb-8 font-bold pr-4">{props.title}</h2>
        <p className="body-1 mb-7">
          We’ll keep you updated on the things you need to know about Gym.
          Nothing more, nothing less.
        </p>
        <div className="flex gap-5">
          <button className="border border-white rounded-full w-11 h-11 grid place-items-center">
            <FontAwesomeIcon
              className="text-white text-[21px]"
              icon={["fab", "whatsapp"]}
            />
          </button>
          <button className="border border-white rounded-full w-11 h-11 grid place-items-center">
            <FontAwesomeIcon
              className="text-white text-[21px]"
              icon={["fas", "phone"]}
            />
          </button>
          <button className="border border-white rounded-full w-11 h-11 grid place-items-center">
            <FontAwesomeIcon
              className="text-white text-[21px]"
              icon={["fas", "envelope"]}
            />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ContactModule;
