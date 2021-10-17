import React from "react";

import Logo from "../Logo";

import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5 em;
  text-align: center;
  color: patevioletred;
`;

const NavBar = () => {
  return (
    <div>
      <Title>Laza Nantenaina</Title>
      <Logo />

      <ul>
        <li>About Me</li>
        <li>My Career</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
