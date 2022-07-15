interface BaseImageProps {
  alt?: string;
  caption?: string;
  lqip?: string | null;
  width: number;
  height?: number;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
}

interface SanityImageProps extends BaseImageProps {
  type: "sanity";
  asset: {
    _ref: string;
    _type: "reference";
    crop?: any;
    hotspot?: any;
  };
}

interface NormalImageProps extends BaseImageProps {
  type: "normal";
  src: string;
}

type ImageProps = SanityImageProps | NormalImageProps;

export default ImageProps;
