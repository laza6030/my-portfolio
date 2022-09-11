import React from "react";
import { InView } from "react-intersection-observer";
import { FormattedMessage } from "gatsby-plugin-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Tux } from "@styled-icons/boxicons-logos/Tux";

import SkillItem from "./SkillItem";
import { SubTitle } from "../styled";

import {
  MainWrapper,
  SubWrapper,
  SkillWrapper,
  ImageWrapper,
} from "./Skills.styled";

const Skills = () => {
  const skills: { logo: React.ReactNode; name: string; percentage: number }[] =
    [
      { logo: <Html5 />, name: "HTML", percentage: 90 },
      { logo: <Css3 />, name: "CSS", percentage: 70 },
      { logo: <Nodejs />, name: "NodeJs", percentage: 75 },
      { logo: <ReactLogo />, name: "React", percentage: 90 },
      { logo: <Tux />, name: "Linux", percentage: 60 },
    ];

  return (
    <MainWrapper id="skills">
      <SubTitle>
        <FormattedMessage id="my.skills" />
      </SubTitle>

      <SubWrapper>
        <ImageWrapper>
          <StaticImage
            src="../../images/undraw_certificate_re_yadi.svg"
            alt="Profile"
          />
        </ImageWrapper>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <SkillWrapper ref={ref}>
              {skills.map(({ logo, name, percentage }, index) => (
                <SkillItem
                  key={index + "-" + name}
                  {...{ logo, name, percentage, inView }}
                />
              ))}
            </SkillWrapper>
          )}
        </InView>
      </SubWrapper>
    </MainWrapper>
  );
};

export default Skills;
