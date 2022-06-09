import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import styled from "styled-components";

interface IProps {
  link: string;
}

const StyledLink = styled.a`
  margin: auto;
  margin-bottom: 20px;
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
`;

const PreviewButton = ({ link }: IProps) => (
  <StyledLink href={link}>
    <FormattedMessage id="see.preview" />
  </StyledLink>
);

export default PreviewButton;
