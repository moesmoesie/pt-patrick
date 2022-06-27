import type { NextPage } from "next";
import { Container, Header } from "../lib/components";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-500 w-full min-h-screen">
      <div className="max-w-[375px] relative bg-white mx-auto min-h-screen">
        <Header />
        <Container>
          <div className="w-full min-h-[300vh]" />
        </Container>
      </div>
    </div>
  );
};

export default Home;
