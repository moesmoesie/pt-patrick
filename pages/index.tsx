import type { NextPage, GetStaticProps } from "next";
import { Module, Header } from "../lib/components";
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
    <div className=" relative w-full min-h-screen">
      <Header />
      <div className="pt-[2rem] overflow-hidden">
        {page.modules.map((el) => {
          return <Module {...el} key={el.key} />;
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  preview = false,
}) => {
  const data = await getClient(preview).fetch(query);
  const page = filterDataToSingleItem(data, preview);
  HomePageZod.parse(page);

  return {
    props: {
      preview: preview,
      page: page,
    },
  };
};

export default Home;
