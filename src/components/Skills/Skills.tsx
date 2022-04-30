import React from "react";

import Skill from "./Skill";

import SubTitle from "../styled/SubTitle.styled";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
// import Paragraph from "../styled/Paragraph.styled";

const Skills = () => {
  return (
    <>
      <SubTitle>My Skills</SubTitle>
      <Skill logo={<Html5 />} name={"html"} percentage={7} />
    </>
  );
};

export default Skills;
