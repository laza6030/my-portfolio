import React from "react";

import {
  Wrapper,
  LogoWrapper,
  Name,
  PercentageWrapper,
  Percentage,
} from "./SkillItem.styled";

interface IProps {
  logo: React.ReactNode;
  name: string;
  percentage: number;
  inView: boolean;
}

const Skill = (props: IProps) => {
  const { logo, name, percentage, inView } = props;
  return (
    <Wrapper>
      <LogoWrapper>{logo}</LogoWrapper>

      <PercentageWrapper>
        <Percentage {...{ percentage, inView }}>
          <Name>{name}</Name>
        </Percentage>
      </PercentageWrapper>
    </Wrapper>
  );
};

export default Skill;
