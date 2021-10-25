import React from "react";
import { Link } from "gatsby";

import Logo from "../Logo";

import styled from "styled-components";

const Div = styled.div`
  color: white;
  background: #363535;
  display: flex;
  align-items: center;
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

const Li = styled.li``;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <Div>
      <Logo />

      <Ul>
        <Li>
          <StyledLink {...{ to: "#" }}>About Me</StyledLink>
        </Li>
        <Li>
          <StyledLink {...{ to: "#" }}>My Career</StyledLink>
        </Li>
        <Li>
          <StyledLink {...{ to: "#" }}>Contact</StyledLink>
        </Li>
      </Ul>
    </Div>
  );
};

export default NavBar;
