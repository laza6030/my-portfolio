import React from "react";

import {
  Wrapper,
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

      <PercentageWrapper>
        <Percentage percentage={percentage}>
          <Name>{name}</Name>
        </Percentage>
      </PercentageWrapper>
    </Wrapper>
  );
};

export default Skill;
