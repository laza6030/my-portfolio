import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Terminal } from "@styled-icons/boxicons-regular/Terminal";
import { Airtable } from "@styled-icons/simple-icons/Airtable";
import { Trello } from "@styled-icons/boxicons-logos/Trello";
import { Postman } from "@styled-icons/simple-icons/Postman";
import { Tux } from "@styled-icons/boxicons-logos/Tux";
import { Git } from "@styled-icons/boxicons-logos/Git";

import { Tool, IconWrapper, ToolsWrapper, Wrapper } from "./Tools.styled";
import { Paragraph } from "../../styled";

const Tools = () => {
  const firstTools: { name: string; icon: React.ReactNode }[] = [
    { name: "Linux", icon: <Tux /> },
    { name: "VS Code", icon: <Visualstudiocode /> },
    { name: "Git", icon: <Git /> },
    { name: "Terminator + Fish", icon: <Terminal /> },
  ];

  const secondTools: { name: string; icon: React.ReactNode }[] = [
    { name: "Postman", icon: <Postman /> },
    { name: "Trello", icon: <Trello /> },
    { name: "Airtable", icon: <Airtable /> },
  ];

  return (
    <>
      <Paragraph top={10} duration={1} delay={0.4}>
        <FormattedMessage id="profile.tools.title" />
      </Paragraph>

      <Wrapper>
        <ToolsWrapper>
          {firstTools.map((tool, index) => (
            <Tool key={tool.name + index}>
              <IconWrapper>{tool.icon}</IconWrapper>
              {tool.name}
            </Tool>
          ))}
        </ToolsWrapper>

        <ToolsWrapper>
          {secondTools.map((tool, index) => (
            <Tool key={tool.name + index}>
              <IconWrapper>{tool.icon}</IconWrapper>
              {tool.name}
            </Tool>
          ))}
        </ToolsWrapper>
      </Wrapper>
    </>
  );
};

export default Tools;
