import React, { useState } from "react";

import NavBar from "../NavBar";
import MobileNavBar from "../MobileNavBar";
import SideBar from "./SideBar";

import { useGetWindowWidth } from "../../hooks";

const Header = () => {
  const { isMobile } = useGetWindowWidth();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleShowMenu = () => setOpenMenu((openMenu) => !openMenu);

  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => setOpenMenu(false));

  return (
    <>
      {isMobile ? <MobileNavBar onClickMenu={toggleShowMenu} /> : <NavBar />}
      {openMenu && <SideBar onCloseMenu={toggleShowMenu} />}
    </>
  );
};

export default Header;
