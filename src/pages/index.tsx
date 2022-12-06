import React from "react";

import { ThemeProvider } from "styled-components";

import { Helmet } from "react-helmet";

import Career from "../components/Career";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Brand from "../components/Brand";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Profile from "../components/Profile";
import SideProject from "../components/SideProject";

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
        <Profile />
        {/* <Career /> */}
        <Project />
        <SideProject />
        {/* <Skills /> */}
        <Contact />
        {/* 
        <Brand /> */}
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
