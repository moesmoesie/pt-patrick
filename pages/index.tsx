import type { NextPage } from "next";
import { Module, Header } from "../lib/components";

const Home: NextPage = () => {
  const pages: any = ["homeLandingProps", "homeAboutMeModule"];

  return (
    <div className=" relative w-full min-h-screen">
      <div id="header">
        <Header />
      </div>
      <div className="pt-[2rem] overflow-hidden">
        {pages.map((el: any) => {
          return <Module key={el} module={el} />;
        })}
      </div>
    </div>
  );
};

export default Home;
