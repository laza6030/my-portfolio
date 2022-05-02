import React from "react";

import Skill from "./Skill";

import SubTitle from "../styled/SubTitle.styled";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
// import Paragraph from "../styled/Paragraph.styled";

const Skills = () => {
  const skills: { logo: React.ReactNode; name: string; percentage: number }[] =
    [
      { logo: <Html5 />, name: "HTML", percentage: 90 },
      { logo: <Css3 />, name: "CSS", percentage: 90 },
      { logo: <Nodejs />, name: "NodeJs", percentage: 75 },
      { logo: <ReactLogo />, name: "React", percentage: 90 },
    ];

  return (
    <>
      <SubTitle>My Skills</SubTitle>
      {skills.map(({ logo, name, percentage }) => (
        <Skill {...{ logo, name, percentage }} />
      ))}
    </>
  );
};

export default Skills;
