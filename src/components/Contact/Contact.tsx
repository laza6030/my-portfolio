import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Telephone } from "@styled-icons/bootstrap/Telephone";

import { SubTitle } from "../styled";

import {
  Wrapper,
  CTA,
  LetsBuild,
  Description,
  IconWrapper,
  ContactValue,
  ContactWrapper,
} from "./Contact.styled";

const EMAIL = "laza6030@gmail.com";
const PHONE = "+261 34 22 521 68";

const Contact = () => {
  return (
    <Wrapper>
      <LetsBuild>
        <SubTitle>
          <FormattedMessage id="contact.let.create" />
        </SubTitle>

        <Description>
          <FormattedMessage id="contact.me.description" />
        </Description>

        <CTA href={`mailto:${EMAIL}`}>
          <FormattedMessage id="contact.talk.to.me" />
        </CTA>
      </LetsBuild>

      <ContactWrapper>
        <ContactValue>
          <IconWrapper>
            <EmailOutline />
          </IconWrapper>
          {EMAIL}
        </ContactValue>

        <ContactValue>
          <IconWrapper>
            <Telephone />
          </IconWrapper>
          {PHONE}
        </ContactValue>
      </ContactWrapper>
    </Wrapper>
  );
};

export default Contact;
