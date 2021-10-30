import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { StyledImage } from "./styled/Image.styled";
import { Title } from "./styled/Title.styled";
import { Flex } from "./styled/Flex.styled";

const About = () => {
  return (
    <Flex id="about">
      <Title>
        My name is Rakoto, I am a Software Engineer. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Mollitia, placeat?
      </Title>

      <StyledImage>
        <StaticImage src="../../images/zuck_motivation.jpg" alt="" />
      </StyledImage>
    </Flex>
  );
};

export default About;
