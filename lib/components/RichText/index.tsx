import { PortableText } from "@portabletext/react";

const myPortableTextComponents: any = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    amethyst: (p: any) => <span className="text-amethyst">{p.children}</span>,
  },
};

const RichText: React.FC<{ content: any }> = ({ content }) => {
  return <PortableText value={content} components={myPortableTextComponents} />;
};

export default RichText;
