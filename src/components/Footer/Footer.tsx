import React from "react";
import styled from "styled-components";

import { useGetWindowWidth } from "../../hooks";
import { MOBILE_DEVICE_WIDTH } from "../../constants";

import { Paragraph } from "../styled";
import SocialMedia from "./SocialMedia";

const CustomParagraph = styled(Paragraph)`
  font-size: x-small;
  text-align: center;
  color: ${({ theme }) => theme.text.white};
`;

const Footer = () => {
  const { width } = useGetWindowWidth();

  return (
    <>
      {width > MOBILE_DEVICE_WIDTH && <SocialMedia />}
      <CustomParagraph>
        Designed & Developed by Laza Nantenaina &copy; Copyright{" "}
        {new Date().getFullYear()} - All rights reserved
      </CustomParagraph>
    </>
  );
};

export default Footer;
