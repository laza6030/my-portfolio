import React from "react";

import Paragraph from "./styled/Paragraph.styled";

import styled from "styled-components";

const CustomParagraph = styled(Paragraph)`
  font-size: x-small;
  text-align: center;
`;

const Footer = () => {
  return (
    <CustomParagraph>
      &copy; Copyright {new Date().getFullYear()} - All rights reserved
    </CustomParagraph>
  );
};

export default Footer;
