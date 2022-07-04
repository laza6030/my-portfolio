import React, { ReactNode } from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

import { Wrapper } from "./Layout.styled";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => (
  <>
    <NavBar />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

export default Layout;
