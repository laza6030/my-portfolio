import React, { ReactNode } from "react";

import { Github } from "@styled-icons/boxicons-logos/Github";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";

import { Wrapper, StyledLink } from "./SocialMedia.styled";

import VerticalLine from "./VerticalLine";

const SocialMedia = () => {
  const socialMedia: { name: string; link: string; icon: ReactNode }[] = [
    { name: "Github", link: "https://github.com/laza6030", icon: <Github /> },
    {
      name: "Facebook",
      link: "https://web.facebook.com/lazanantenaina1/",
      icon: <FacebookCircle />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/laza-nantenaina-64394b206/",
      icon: <LinkedinWithCircle />,
    },
  ];

  return (
    <Wrapper>
      {socialMedia.map(({ name, link, icon }) => (
        <StyledLink id={name} href={link}>
          {icon}
        </StyledLink>
      ))}
      <VerticalLine />
    </Wrapper>
  );
};

export default SocialMedia;
