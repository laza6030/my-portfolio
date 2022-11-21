import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";
import { Tux } from "@styled-icons/boxicons-logos/Tux";
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Terminal } from "@styled-icons/boxicons-regular/Terminal";
import { Postman } from "@styled-icons/simple-icons/Postman";
import { Trello } from "@styled-icons/boxicons-logos/Trello";
import { Airtable } from "@styled-icons/simple-icons/Airtable";

import { Paragraph } from "../../styled";

import { Tool, IconWrapper, ToolsWrapper, Wrapper } from "./Tools.styled";

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
      <Paragraph>
        <FormattedMessage id="profile.tools.title" />
      </Paragraph>

      <Wrapper>
        <ToolsWrapper>
          {firstTools.map((tool) => (
            <Tool>
              <IconWrapper>{tool.icon}</IconWrapper>
              {tool.name}
            </Tool>
          ))}
        </ToolsWrapper>

        <ToolsWrapper>
          {secondTools.map((tool) => (
            <Tool>
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
