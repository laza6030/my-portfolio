import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { SubTitle } from "../styled";

import SideProjectItem, {
  IProps as SideProjectItemType,
} from "./SideProjectItem";

import portfolioSrc from "../../images/portfolio.png";
import todoListAppSrc from "../../images/todo-list-app.png";

const SideProject = () => {
  const sideProjectList: SideProjectItemType[] = [
    {
      name: "My portfolio",
      description:
        "Current portfolio which is designed and developed entirely by myself. For me, it's big accomplishment.",
      technos: [
        "Gatsby",
        "Typescript",
        "styled-component",
        "styled-icons",
        "Netlify",
      ],
      screenShot: portfolioSrc,
      githubLink: "https://github.com/laza6030/my-portfolio",
    },
    {
      name: "My todo-list app",
      description:
        "In fact, as its name suggests, it is an application that allows you to manage your tasks. It's a project quite common to all developers, and it allowed me to get more familiar with the technologies I used to develop it.",
      technos: [
        "React",
        "Apollo",
        "GraphQL",
        "Material UI",
        "Storybook",
        "Jest",
        "NodeJs",
        "Docker",
      ],
      screenShot: todoListAppSrc,
      githubLink: "https://github.com/laza6030/my-todo-list-app",
    },
  ];

  return (
    <>
      <SubTitle>
        <FormattedMessage id="other.side.projects" />
      </SubTitle>

      {sideProjectList.map(
        ({ name, description, technos, screenShot, githubLink }, index) => (
          <SideProjectItem
            key={index}
            {...{ name, description, technos, screenShot, githubLink }}
            isReverse={index % 2 === 1}
          />
        )
      )}
    </>
  );
};

export default SideProject;
