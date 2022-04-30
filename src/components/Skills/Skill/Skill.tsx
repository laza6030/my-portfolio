import React from "react";

import {
  Wrapper,
  DescriptionWrapper,
  LogoWrapper,
  Name,
  PercentageWrapper,
  Percentage,
} from "./Skill.styled";

interface IProps {
  logo: React.ReactNode;
  name: string;
  percentage: number;
}

const Skill = (props: IProps) => {
  const { logo, name, percentage } = props;
  return (
    <Wrapper>
      <LogoWrapper>{logo}</LogoWrapper>

      <DescriptionWrapper>
        <Name>{name}</Name>

        <PercentageWrapper>
          <Percentage></Percentage>
        </PercentageWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Skill;
