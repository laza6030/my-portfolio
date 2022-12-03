import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Wrapper, ImageWrapper, DescriptionWrapper } from "./Profile.styled";
import { Paragraph } from "../styled";

import Tools from "./Tools";

const Profile = () => (
  <Wrapper>
    <ImageWrapper>
      <StaticImage
        src="../../images/profile_1.png"
        alt="Profile picture"
        width={300}
        height={300}
        style={{
          borderRadius: 5,
        }}
      />
    </ImageWrapper>

    <DescriptionWrapper>
      <Paragraph top={10} duration={1} delay={0.4}>
        <FormattedMessage id="me.software.engineer.first.description" />
      </Paragraph>

      <Paragraph top={10} duration={1} delay={0.4}>
        <FormattedMessage id="me.software.engineer.second.description" />
      </Paragraph>

      <Tools />
    </DescriptionWrapper>
  </Wrapper>
);

export default Profile;
