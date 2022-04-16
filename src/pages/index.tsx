import React from "react";

import { ThemeProvider } from "styled-components";

import NavBar from "../components/NavBar/NavBar";
import Career from "../components/Career";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Brand from "../components/Brand/Brand";
import Skills from "../components/Skills";
import Footer from "../components/Footer/Footer";

import MainWrapper from "../components/styled/MainWrapper.styled";

import theme from "../theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <NavBar />
        <AboutMe />
        <Career />
        <Skills />
        <Contact />
        <Brand />
        <Footer />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default Home;
