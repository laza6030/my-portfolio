import React from "react";

import { Github } from "@styled-icons/boxicons-logos/Github";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";

import { Wrapper, StyledLink } from "./SocialMedia.styled";

import VerticalLine from "./VerticalLine";

const SocialMedia = () => {
  return (
    <Wrapper>
      <StyledLink href="https://github.com/laza6030">
        <Github />
      </StyledLink>

      <StyledLink href="https://web.facebook.com/lazanantenaina1/">
        <FacebookCircle />
      </StyledLink>

      <StyledLink href="https://www.linkedin.com/in/laza-nantenaina-64394b206/">
        <LinkedinWithCircle />
      </StyledLink>
      <VerticalLine />
    </Wrapper>
  );
};

export default SocialMedia;
