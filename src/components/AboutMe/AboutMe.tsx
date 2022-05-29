import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { StaticImage } from "gatsby-plugin-image";

import { StyledImage } from "../styled/Image.styled";
import { Title } from "../styled/Title.styled";
import { TitleWrapper, MainWrapper } from "./About.styled";

const About = () => {
  return (
    <MainWrapper id="about">
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
        {/* <StaticImage src="../../images/profile.png" alt="Profile" /> */}
        <StaticImage
          src="../../images/undraw_programming_re_kg9v.svg"
          alt="Programming illustration"
        />
      </StyledImage>
    </MainWrapper>
  );
};

export default About;
