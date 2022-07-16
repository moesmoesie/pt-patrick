import type { NextPage, GetStaticProps } from "next";
import { Module, Header, Footer } from "../lib/components";
import { homeQuery as query } from "../lib/sanity/client/queries";
import { z } from "zod";

import {
  getClient,
  filterDataToSingleItem,
} from "../lib/sanity/client/sanity.server";

import { HomePageZod } from "../types";
type HomePageProps = z.infer<typeof HomePageZod>;

interface Props {
  preview: boolean;
  page: HomePageProps;
}

const Home: NextPage<Props> = ({ preview, page }) => {
  return (
    <div className="relative min-h-screen w-full">
      <Header />

      <div className="relative overflow-hidden pt-[2rem]">
        {page.modules.map((el) => {
          return <Module {...el} key={el.key} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  preview = false,
}) => {
  const data = await getClient(preview).fetch(query);
  const page = filterDataToSingleItem(data, preview);
  console.log(page.modules[1]);
  HomePageZod.parse(page);

  return {
    props: {
      preview: preview,
      page: page,
    },
  };
};

export default Home;
