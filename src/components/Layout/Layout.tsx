import React from "react";

import NavBar from "../NavBar";
import Footer from "../Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
