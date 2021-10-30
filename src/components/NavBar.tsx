import React from "react";

import { StyledNavBar } from "./styled/NavBar.styled";

import Logo from "./Logo";
import NavItem from "./NavItem";

const NavBar = () => {
  const items: { name: string; link: string }[] = [
    { name: "About Me", link: "#about" },
    { name: "My Career", link: "#career" },
    { name: "My skills", link: "#skills" },
    { name: "Contact Me", link: "#contact" },
  ];

  return (
    <StyledNavBar>
      <Logo />

      {items.map(({ link, name }) => (
        <NavItem {...{ name, link }} />
      ))}
    </StyledNavBar>
  );
};

export default NavBar;
