import ImageProps from "./types";
import { urlFor } from "../../sanity/client/sanity";

const Image: React.FC<ImageProps> = (props) => {
  if (props.type == "normal") {
    return (
      <img
        style={{
          objectFit: props.objectFit,
        }}
        width={props.width}
        src={props.src}
        alt={props.alt}
        title={props.caption}
      />
    );
  }

  return (
    <div className={`${props.className} relative`}>
      {props.lqip && (
        <img
          style={{
            objectFit: props.objectFit,
          }}
          width={props.width}
          className="absolute w-full h-full"
          src={props.lqip}
          title={props.caption}
          alt={props.alt}
        />
      )}

      <img
        style={{
          objectFit: props.objectFit,
        }}
        width={props.width}
        className="w-full h-full relative"
        title={props.caption}
        src={urlFor(props.asset)
          .width(props.width)
          .auto("format")
          .fit("fill")
          .url()}
        alt={props.alt}
      />
    </div>
  );
};

export default Image;
