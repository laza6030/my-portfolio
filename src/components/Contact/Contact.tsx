import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Telephone } from "@styled-icons/bootstrap/Telephone";

import { SubTitle } from "../styled";

import { Row } from "./Contact.styled";

const EMAIL = "laza6030@gmail.com";
const PHONE = "+261 34 22 521 68";

const Contact = () => {
  return (
    <>
      <SubTitle>
        <FormattedMessage id="contact.let.create" />
      </SubTitle>

      <FormattedMessage id="contact.me.title" />
      <Row>
        <EmailOutline />
        {EMAIL}
      </Row>

      <Row>
        <Telephone />
        {PHONE}
      </Row>
    </>
  );
};

export default Contact;
