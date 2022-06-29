import type { NextPage, GetStaticProps } from "next";
import { Module, Header } from "../lib/components";
import {
  getClient,
  filterDataToSingleItem,
} from "../lib/sanity/client/sanity.server";
import { groq } from "next-sanity";

const query = groq`
  *[_type == 'homePage']{
    _id,
    title
  }
`;

const Home: NextPage = (props: any) => {
  const { page } = props;

  console.log(page.title);

  const pages: any = [
    "homeLandingProps",
    "homeAboutMeModule",
    "homeCoreInfoModule",
  ];

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

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(query);
  const page = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview: preview,
      page,
    },
  };
};

export default Home;
