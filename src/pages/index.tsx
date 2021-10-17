import React from "react";

import Layout from "../components/Layout";
import Career from "../components/Career";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <Layout>
      <About />
      <Career />
      <Contact />
    </Layout>
  );
};

export default Home;
