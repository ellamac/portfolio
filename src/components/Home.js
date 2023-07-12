import React from "react";
import Brief from "./Brief";
import About from "./About";
import Newest from "./Newest";

const Home = ({ projects }) => {
  return (
    <>
      <Brief />
      <About />
      <Newest
        header={"Newest projects"}
        data={projects}
        type={"projects"}
        back={""}
      />
    </>
  );
};

export default Home;
