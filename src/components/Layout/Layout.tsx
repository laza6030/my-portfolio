import React, { ReactNode } from "react";

import MobileNavBar from "../MobileNavBar";
import NavBar from "../NavBar";
import Footer from "../Footer";

import { useGetWindowWidth } from "../../hooks";
import { Wrapper } from "./Layout.styled";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { isMobile } = useGetWindowWidth();
  return (
    <>
      {isMobile ? <MobileNavBar /> : <NavBar />}

      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
