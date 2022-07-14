import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { SubTitle } from "../styled/SubTitle.styled";

import {
  ContentWrapper,
  CarrerItem,
  CareerTitle,
  StyledPersonSupport,
  StyledCode,
  Description,
  Wrapper,
} from "./Career.styled";

const Career = () => {
  return (
    <Wrapper id="career">
      <SubTitle>
        <FormattedMessage id="my.it.carrer" />
      </SubTitle>
      <ContentWrapper>
        <CarrerItem>
          <StyledPersonSupport />
          <CareerTitle>
            <FormattedMessage id="my.it.carrer.support.title" />
          </CareerTitle>
          <Description>
            <FormattedMessage id="my.it.carrer.support.description" />
          </Description>
        </CarrerItem>

        <CarrerItem>
          <StyledCode />
          <CareerTitle>
            <FormattedMessage id="my.it.carrer.developer.title" />
          </CareerTitle>
          <Description>
            <FormattedMessage id="my.it.carrer.developer.description" />
          </Description>
        </CarrerItem>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Career;
