import React from "react";

import { StyledNavItem, StyledLink } from "../styled/NavBar.styled";

interface IProps {
  name: string;
  link: string;
}

const NavItem = (props: IProps) => {
  const { name, link } = props;
  return (
    <StyledNavItem>
      <StyledLink to={link}>{name}</StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
