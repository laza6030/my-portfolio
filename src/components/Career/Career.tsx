import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import SubTitle from "../styled/SubTitle.styled";
import Wrapper from "../styled/Wrapper.styled";
import { PersonSupport } from "@styled-icons/fluentui-system-filled/PersonSupport";
import { Code } from "@styled-icons/fluentui-system-regular/Code";

import { ContentWrapper, CarrerItem } from "./Career.styled";

const Career = () => {
  return (
    <Wrapper id="my-career">
      <SubTitle>
        <FormattedMessage id="my.it.carrer" />
      </SubTitle>
      <ContentWrapper>
        <CarrerItem>
          <PersonSupport />
          <FormattedMessage id="my.it.carrer.support.description" />
        </CarrerItem>

        <CarrerItem>
          <Code />
          <FormattedMessage id="my.it.carrer.developer.description" />
        </CarrerItem>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Career;
