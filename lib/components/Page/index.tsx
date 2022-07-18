import { PageProps } from "./types";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
import { useEffect } from "react";

function sleep(time: any) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    sleep(500).then(() => {
      var el = document.querySelector("html");
      el?.classList.add("scroll-smooth");
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="icon shortcut" href={props.favicon} />
        <meta name="keywords" content={props.keywords?.join(",")} />
        <meta name="description" content={props.description} />
        <title>{props.title}</title>
      </Head>
      <div className="relative min-h-screen w-full">
        <Header menu={props.header.menu} logo={props.header.logo} />
        <div className="relative overflow-hidden pt-[2rem]">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
