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
} from "./About.styled";

const About = () => (
  <Wrapper id="about">
    <TitleWrapper>
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

      <Paragraph>
        <FormattedMessage id="me.software.engineer.description" />
      </Paragraph>
    </TitleWrapper>

    <StyledImage>
      <StaticImage
        src="../../images/undraw_programming_re_kg9v.svg"
        alt="Programming illustration"
      />
    </StyledImage>

    {/* Move to profil section (new component) */}
    {/* <Wrapper>
        <StaticImage src="../../images/avatar.svg" alt="Avatar" />
        <Description>
          <Title>
            <FormattedMessage id="me.software.engineer" />
          </Title>
        </Description>
      </Wrapper> */}
  </Wrapper>
);

export default About;
