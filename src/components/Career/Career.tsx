import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import SubTitle from "../styled/SubTitle.styled";
import Wrapper from "../styled/Wrapper.styled";

import {
  ContentWrapper,
  CarrerItem,
  StyledPersonSupport,
  StyledCode,
  Description,
} from "./Career.styled";

const Career = () => {
  return (
    <Wrapper id="my-career">
      <SubTitle>
        <FormattedMessage id="my.it.carrer" />
      </SubTitle>
      <ContentWrapper>
        <CarrerItem>
          <StyledPersonSupport />
          <Description>
            <FormattedMessage id="my.it.carrer.support.description" />
          </Description>
        </CarrerItem>

        <CarrerItem>
          <StyledCode />
          <Description>
            <FormattedMessage id="my.it.carrer.developer.description" />
          </Description>
        </CarrerItem>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Career;
