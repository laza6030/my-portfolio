import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { StaticImage } from "gatsby-plugin-image";

import { Title, Paragraph } from "../styled";
import {
  TitleWrapper,
  Wrapper,
  Name,
  Highlight,
  StyledImage,
  Greeting,
} from "./About.styled";

const About = () => (
  <Wrapper id="about">
    <TitleWrapper>
      <Greeting>
        <FormattedMessage id="me.greeting" />
      </Greeting>

      <Title>
        <FormattedMessage
          id="me.presentation"
          values={{
            bold: (chunck: string) => <Name>{chunck}</Name>,
          }}
        />
      </Title>
      <Paragraph>
        <FormattedMessage
          id="me.presentation.description"
          values={{
            highlight: (chunck: string) => <Highlight>{chunck}</Highlight>,
          }}
        />
      </Paragraph>
    </TitleWrapper>

    <StyledImage>
      <StaticImage
        src="../../images/undraw_programming_re_kg9v.svg"
        alt="Programming illustration"
      />
    </StyledImage>
  </Wrapper>
);

export default About;
