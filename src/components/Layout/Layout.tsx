import React, { ReactNode } from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

import { useGetWindowWidth } from "../../hooks";
import { MOBILE_DEVICE_WIDTH } from "../../constants";
import { Wrapper } from "./Layout.styled";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { width } = useGetWindowWidth();
  return (
    <>
      {width > MOBILE_DEVICE_WIDTH ? <NavBar /> : <>MobileNavBar</>}

      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
