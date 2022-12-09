import React from "react";
import styled from "styled-components";

import { Paragraph } from "../styled";
import SocialMedia from "./SocialMedia";

const CustomParagraph = styled(Paragraph)`
  font-size: x-small;
  text-align: center;
  color: ${({ theme }) => theme.text.white};
`;

const Footer = () => (
  <>
    <SocialMedia />
    <CustomParagraph>
      Designed & Developed by Laza Nantenaina &copy; Copyright{" "}
      {new Date().getFullYear()} - All rights reserved
    </CustomParagraph>
  </>
);

export default Footer;
