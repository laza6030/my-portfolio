import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import { SubTitle } from "../styled";
import ProjectItem from "./ProjectItem";

import { ProjectItemWrapper, MainWrapper } from "./Project.styled";

const Project = () => {
  const ProjectList: {
    title: string;
    description: string;
    tools: string[];
    link: string;
  }[] = [
    {
      title: "SmartPredict landing page",
      description:
        "Contribution to the development of SmartPredict's Landing page",
      tools: ["Gatsby", "Material UI", "Javascript", "Prismic"],
      link: "https://smartpredict.ai",
    },
    {
      title: "SmartPredict application",
      description: "The actual web application which is Saas",
      tools: [
        "ReactJS",
        "Typescript",
        "Material UI",
        "GraphQL",
        "NodeJs",
        "Mongo",
        "Docker",
        "Kubernetes",
        "RabbitMQ",
        "Redis",
      ],
      link: "https://cloud.smartpredict.ai/",
    },
    {
      title: "My portfolio",
      description:
        "Current portfolio which is designed and developed entirely by myself. For me, it's big accomplishment",
      tools: ["Gatsby", "Typescript", "styled-components", "styled-icons"],
      link: "https://laza.netlify.com/",
    },
  ];

  return (
    <MainWrapper>
      <SubTitle>
        <FormattedMessage id="project" />
      </SubTitle>

      <ProjectItemWrapper>
        {ProjectList.map(({ title, description, tools, link }, index) => (
          <ProjectItem
            {...{ key: index, title, description, tools, link }}
            top={(index + 1) * 25} // Define the starting animation position
          />
        ))}
      </ProjectItemWrapper>
    </MainWrapper>
  );
};

export default Project;
