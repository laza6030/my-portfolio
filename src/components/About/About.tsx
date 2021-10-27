import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <div id="about-me">
      My name is Rakoto Midev, I am a Software Engineer
      <StaticImage src="../../images/zuck_motivation.jpg" alt="" />
    </div>
  );
};

export default About;
