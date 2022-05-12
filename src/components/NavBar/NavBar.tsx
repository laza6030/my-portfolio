import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";

import { StyledNavBar } from "../styled/NavBar.styled";

import Logo from "../Logo";
import NavItem from "../NavItem/NavItem";
// import SwitchLanguage from "../SwitchLanguage"; TO DO LATER

const NavBar = () => {
  const intl = useIntl();
  const [colorChange, setColorChange] = useState<boolean>(false);

  const items: { name: string; link: string }[] = [
    { name: intl.formatMessage({ id: "about.me" }), link: "#about" },
    { name: intl.formatMessage({ id: "my.career" }), link: "#career" },
    { name: intl.formatMessage({ id: "my.skills" }), link: "#skills" },
    { name: intl.formatMessage({ id: "contact.me" }), link: "#contact" },
  ];

  const changeBackgroundColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundColor);

  return (
    <StyledNavBar colorChange={colorChange}>
      <Logo />

      {items.map(({ link, name }, index) => (
        <NavItem key={index + "-" + name} {...{ name, link }} />
      ))}

      {/* <SwitchLanguage /> */}
    </StyledNavBar>
  );
};

export default NavBar;
