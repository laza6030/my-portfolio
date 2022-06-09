import React from "react";

import PreviewButton from "../../../components/PreviewButton";

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
  link: string;
  tools: string[];
}

const ProjectItem = (props: IProps) => {
  const { title, description, tools, link } = props;
  return (
    <MainWrapper>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <ToolWrapper>
        {tools.map((tool, index) => (
          <Tool key={index}>{tool}</Tool>
        ))}
      </ToolWrapper>

      <PreviewButton link={link} />
    </MainWrapper>
  );
};

export default ProjectItem;
