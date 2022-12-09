import React, { useState } from "react";

import Logo from "../Logo";
import { MainWrapper, MenuIcon } from "./MobileNavBar.styled";

interface IProps {
  onClickMenu: () => void;
}

const MobileNavBar = (props: IProps) => {
  const { onClickMenu } = props;
  const [colorChange, setColorChange] = useState<boolean>(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackgroundColor);

  return (
    <MainWrapper colorChange={colorChange}>
      <Logo />
      <MenuIcon onClick={onClickMenu} />
    </MainWrapper>
  );
};

export default MobileNavBar;
