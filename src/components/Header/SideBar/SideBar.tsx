import React from "react";

import { CloseMenuIcon, MainWrapper, MenuItem } from "./SideBar.styled";

interface IProps {
  onCloseMenu: () => void;
}

const SideBar = (props: IProps) => {
  const { onCloseMenu } = props;

  const menuList: { label: string; link: string }[] = [
    { label: "About Me", link: "#about" },
    { label: "Projects", link: "#projects" },
    { label: "Contact Me", link: "#contact" },
  ];

  return (
    <MainWrapper>
      <CloseMenuIcon onClick={onCloseMenu} />
      {menuList.map(({ label, link }, index) => (
        <MenuItem key={index} to={link}>
          {label}
        </MenuItem>
      ))}
    </MainWrapper>
  );
};

export default SideBar;
