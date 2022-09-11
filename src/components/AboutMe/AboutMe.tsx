import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { StaticImage } from "gatsby-plugin-image";

import { StyledImage } from "../styled/Image.styled";
import { Title } from "../styled/Title.styled";
import {
  TitleWrapper,
  Wrapper,
  Description,
  Name,
  Highlight,
} from "./About.styled";

const About = () => (
  <>
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

        <div>
          <FormattedMessage
            id="me.presentation.description"
            values={{
              highlight: (chunck: string) => <Highlight>{chunck}</Highlight>,
            }}
          />
        </div>
      </TitleWrapper>

      <StyledImage>
        <StaticImage
          src="../../images/undraw_programming_re_kg9v.svg"
          alt="Programming illustration"
        />
      </StyledImage>
    </Wrapper>

    <Wrapper>
      <StaticImage src="../../images/avatar.svg" alt="Avatar" />
      <Description>
        <Title>
          <FormattedMessage id="me.software.engineer" />
        </Title>
        <FormattedMessage id="me.software.engineer.description" />
      </Description>
    </Wrapper>
  </>
);

export default About;
