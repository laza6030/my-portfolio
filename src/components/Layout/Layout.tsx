import React from "react";

import NavBar from "../NavBar";

interface IProps {
  children: React.ReactNode;
}

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
