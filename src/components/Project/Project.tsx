import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";

import { SubTitle } from "../styled";
import ProjectItem from "./ProjectItem";

import { MainWrapper, ProjectItemWrapper } from "./Project.styled";

const Project = () => {
  const ProjectList: { title: string; description: string; tools: string[] }[] =
    [
      {
        title: "SmartPredict landing page",
        description:
          "Contribution to the development of SmartPredict's Landing page",
        tools: ["Gatsby", "Material UI", "Javascript", "Prismic"],
      },
      {
        title: "SmartPredict application",
        description: "The actual web application which is Saas",
        tools: [
          "ReactJS",
          "Typescript",
          "Kubernetes",
          "GraphQL",
          "NodeJs",
          "Material UI",
          "Mongo",
          "Redis",
          "RabbitMQ",
        ],
      },
      {
        title: "My portfolio",
        description:
          "Current portfolio which is designed and developed entirely by myself. For me, it's big accomplishment",
        tools: ["Gatsby", "Typescript", "styled-components", "styled-icons"],
      },
    ];

  return (
    <MainWrapper>
      <SubTitle>
        <FormattedMessage id="project" />
      </SubTitle>

      <ProjectItemWrapper>
        {ProjectList.map(({ title, description, tools }, index) => (
          <ProjectItem {...{ key: index, title, description, tools }} />
        ))}
      </ProjectItemWrapper>
    </MainWrapper>
  );
};

export default Project;
