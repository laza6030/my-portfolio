import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { StaticImage } from "gatsby-plugin-image";

import { StyledImage } from "../styled/Image.styled";
import { Title } from "../styled/Title.styled";
import { Flex } from "../styled/Flex.styled";

const About = () => {
  return (
    <Flex id="about">
      <Title>
        <FormattedMessage
          id="me.presentation"
          values={{ bold: (chunck: string) => chunck }}
        />
      </Title>

      <FormattedMessage id="me.presentation.description" />

      {/* <StyledImage>
        <StaticImage src="../../images/zuck_motivation.jpg" alt="" />
      </StyledImage> */}
    </Flex>
  );
};

export default About;
