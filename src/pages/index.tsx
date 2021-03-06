import React from "react";

import { ThemeProvider } from "styled-components";

import { Helmet } from "react-helmet";

import Career from "../components/Career";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Brand from "../components/Brand";
import Skills from "../components/Skills";
import Project from "../components/Project";

import Layout from "../components/Layout";

import theme from "../theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Laza Nantenaina</title>
      </Helmet>
      <Layout>
        <AboutMe />
        {/* <Career /> */}
        <Project />
        <Skills />
        <Contact />
        {/* 
        <Brand /> */}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
