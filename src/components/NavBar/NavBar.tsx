import React from "react";
import { Link } from "gatsby";

import Logo from "../Logo";

import styled from "styled-components";

const Div = styled.div`
  color: white;
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
  color: #c6dbf5;
  text-decoration: none;
  padding-bottom: 5px;
  &:hover {
    border-bottom: 1px solid #c6dbf5;
  }
`;

const NavBar = () => {
  return (
    <Div>
      <Logo />

      <Ul>
        <Li>
          <StyledLink {...{ to: "#about-me" }}>About Me</StyledLink>
        </Li>
        <Li>
          <StyledLink {...{ to: "#my-career" }}>My Career</StyledLink>
        </Li>
        <Li>
          <StyledLink {...{ to: "#contact-me" }}>Contact Me</StyledLink>
        </Li>
      </Ul>
    </Div>
  );
};

export default NavBar;
