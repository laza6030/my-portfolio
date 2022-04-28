import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { StaticImage } from "gatsby-plugin-image";

import { StyledImage } from "../styled/Image.styled";
import { Title } from "../styled/Title.styled";
import { Flex } from "../styled/Flex.styled";
import { TitleWrapper } from "./About.styled";

const About = () => {
  return (
    <Flex id="about">
      <TitleWrapper>
        <Title>
          <FormattedMessage
            id="me.presentation"
            values={{ bold: (chunck: string) => chunck }}
          />
        </Title>

        <FormattedMessage id="me.presentation.description" />
      </TitleWrapper>

      <StyledImage>
        <StaticImage src="../../images/profile.png" alt="Profile" />
      </StyledImage>
    </Flex>
  );
};

export default About;