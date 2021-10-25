import React from "react";

import NavBar from "../NavBar";

import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

// const StyledDiv = styled.div`
//   background: #302f2f;
//   color: blue;
//   margin: 0px;
// `;

const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
