import React from "react";

import Layout from "../components/Layout";
import Career from "../components/Career";
import About from "../components/About";
import Contact from "../components/Contact";

import styled from "styled-components";

const StyledLayout = styled(Layout)`
  background: #241c1a;
`;

const Home = () => {
  return (
    <StyledLayout>
      <About />
      <Career />
      <Contact />
    </StyledLayout>
  );
};

export default Home;
