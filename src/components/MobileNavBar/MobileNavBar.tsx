import React from "react";

import Logo from "../Logo";
import { MainWrapper, MenuIcon } from "./MobileNavBar.styled";

const MobileNavBar = () => (
  <MainWrapper>
    <Logo />
    <MenuIcon />
  </MainWrapper>
);

export default MobileNavBar;
