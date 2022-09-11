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
  top: number;
  inView: boolean;
}

const ProjectItem = (props: IProps) => {
  const { title, description, tools, link, top, inView } = props;
  return (
    <MainWrapper top={top} inView={inView}>
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
