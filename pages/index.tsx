import type { NextPage, GetStaticProps } from "next";
import { Module } from "../lib/components";
import { homeQuery as query } from "../lib/sanity/client/queries";
import { Page } from "../lib/components";
import {
  getClient,
  filterDataToSingleItem,
} from "../lib/sanity/client/sanity.server";
import { HomePageProps, HomePageZod } from "../types";

const Home: NextPage<{ page: HomePageProps }> = ({ page }) => {
  return (
    <Page
      header={page.header}
      title={page.title}
      keywords={page.keywords}
      description={page.description}
    >
      <div>
        {page.modules.map((el) => {
          return <Module {...el} key={el.key} />;
        })}
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getClient(preview).fetch(query);
  const page = filterDataToSingleItem(data, preview);
  HomePageZod.parse(page);
  return {
    props: {
      page: page,
    },
  };
};

export default Home;
