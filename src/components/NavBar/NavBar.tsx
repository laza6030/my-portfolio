import React from "react";

import Logo from "../Logo";

// TO DO: autocomplete style
import {} from "./styles.module.css";

const NavBar = () => {
  return (
    <div>
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
