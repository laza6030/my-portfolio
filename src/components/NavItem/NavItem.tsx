import React from "react";

import { StyledLink } from "../styled/NavBar.styled";
import { StyledNavItem } from "./NavItem.styled";

interface IProps {
  name: string;
  link: string;
  top: number;
}

const NavItem = (props: IProps) => {
  const { name, link, top } = props;
  return (
    <StyledNavItem top={top}>
      <StyledLink to={link}>{name}</StyledLink>
    </StyledNavItem>
  );
};

export default NavItem;
