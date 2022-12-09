import React from "react";

import { Github } from "@styled-icons/feather/Github";

import {
  Name,
  Section,
  MainWrapper,
  Description,
  Techno,
  StyledLink,
} from "./SideProjectItems.styled";

export interface IProps {
  name: string;
  description: string;
  technos: string[];
  screenShot: string;
  githubLink: string;
  isReverse?: boolean;
}

const SideProjectItem = (props: IProps) => {
  const {
    name,
    description,
    technos,
    screenShot,
    githubLink,
    isReverse = false,
  } = props;

  return (
    <MainWrapper isReverse={isReverse}>
      <Section>
        <div style={{ display: "flex" }}>
          <Name>{name}</Name>
          <StyledLink href={githubLink} target="_blank">
            <Github />
          </StyledLink>
        </div>
        <Description>{description}</Description>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {technos.map((techno, index) => (
            <Techno key={index}>{techno}</Techno>
          ))}
        </div>
      </Section>

      <Section>
        <img src={screenShot} style={{ width: "100%", position: "relative" }} />
      </Section>
    </MainWrapper>
  );
};

export default SideProjectItem;
