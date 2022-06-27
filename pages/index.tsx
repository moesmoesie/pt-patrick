import type { NextPage } from "next";
import { Container } from "../lib/components";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-500 w-full min-h-screen">
      <div className="max-w-[375px] bg-white mx-auto min-h-screen">
        <Container>
          <div className="w-full h-96 bg-green" />
        </Container>
      </div>
    </div>
  );
};

export default Home;
