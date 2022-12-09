import React, { ReactNode } from "react";

import Header from "../Header";
import Footer from "../Footer";

import { Wrapper } from "./Layout.styled";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
