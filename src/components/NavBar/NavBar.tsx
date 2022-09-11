import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";

import { StyledNavBar } from "../styled/NavBar.styled";

import NavItem from "../NavItem/NavItem";
import Logo from "../Logo";

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

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackgroundColor);

  return (
    <StyledNavBar colorChange={colorChange}>
      <Logo />

      {items.map(({ link, name }, index) => (
        <NavItem
          key={index + "-" + name}
          {...{ name, link }}
          top={(index + 1) * 80} // Define the sliding nav bar animation timing
        />
      ))}
    </StyledNavBar>
  );
};

export default NavBar;
