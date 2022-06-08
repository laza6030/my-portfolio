import React from "react";

import {
  MainWrapper,
  Title,
  Description,
  Tool,
  ToolWrapper,
} from "./ProjectItem.styled";

interface IProps {
  title: string;
  description: string;
  tools: string[];
}

const ProjectItem = (props: IProps) => {
  const { title, description, tools } = props;
  return (
    <MainWrapper>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <ToolWrapper>
        {tools.map((tool, index) => (
          <Tool key={index}>{tool}</Tool>
        ))}
      </ToolWrapper>
    </MainWrapper>
  );
};

export default ProjectItem;
