import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import Skill from "./Skill";

import SubTitle from "../styled/SubTitle.styled";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Tux } from "@styled-icons/boxicons-logos/Tux";

import { StyledImage } from "../styled/Image.styled";
import { StaticImage } from "gatsby-plugin-image";

import { MainWrapper, SubWrapper } from "./Skills.styled";

const Skills = () => {
  const skills: { logo: React.ReactNode; name: string; percentage: number }[] =
    [
      { logo: <Html5 />, name: "HTML", percentage: 90 },
      { logo: <Css3 />, name: "CSS", percentage: 90 },
      { logo: <Nodejs />, name: "NodeJs", percentage: 75 },
      { logo: <ReactLogo />, name: "React", percentage: 90 },
      { logo: <Tux />, name: "Linux", percentage: 60 },
    ];

  return (
    <MainWrapper>
      <SubTitle>
        <FormattedMessage id="my.skills" />
      </SubTitle>

      <SubWrapper>
        <div>
          <StyledImage>
            <StaticImage
              src="../../images/undraw_certificate_re_yadi.svg"
              alt="Profile"
            />
          </StyledImage>
        </div>

        <div>
          {skills.map(({ logo, name, percentage }, index) => (
            <Skill key={index + "-" + name} {...{ logo, name, percentage }} />
          ))}
        </div>
      </SubWrapper>
    </MainWrapper>
  );
};

export default Skills;
