import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import { StyledNavBar } from "../styled/NavBar.styled";

import Logo from "../Logo";
import NavItem from "../NavItem/NavItem";
import SwitchLanguage from "../SwitchLanguage";

const NavBar = () => {
  const intl = useIntl();

  const items: { name: string; link: string }[] = [
    { name: intl.formatMessage({ id: "about.me" }), link: "#about" },
    { name: intl.formatMessage({ id: "my.career" }), link: "#career" },
    { name: intl.formatMessage({ id: "my.skills" }), link: "#skills" },
    { name: intl.formatMessage({ id: "contact.me" }), link: "#contact" },
  ];

  return (
    <StyledNavBar>
      <Logo />

      {items.map(({ link, name }) => (
        <NavItem {...{ name, link }} />
      ))}

      <SwitchLanguage />
    </StyledNavBar>
  );
};

export default NavBar;
