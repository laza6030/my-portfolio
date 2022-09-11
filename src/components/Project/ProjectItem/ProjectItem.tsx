import React from "react";
import { InView } from "react-intersection-observer";

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
}

const ProjectItem = (props: IProps) => {
  const { title, description, tools, link, top } = props;
  return (
    <InView triggerOnce>
      {({ ref, inView }) => (
        <MainWrapper top={top} inView={inView}>
          <Title ref={ref}>{title}</Title>

          <Description>{description}</Description>

          <ToolWrapper>
            {tools.map((tool, index) => (
              <Tool key={index}>{tool}</Tool>
            ))}
          </ToolWrapper>

          <PreviewButton link={link} />
        </MainWrapper>
      )}
    </InView>
  );
};

export default ProjectItem;
