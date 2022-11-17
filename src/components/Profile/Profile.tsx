import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Paragraph } from "../styled";
import { Wrapper, ImageWrapper, DescriptionWrapper } from "./Profile.styled";

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
      <Paragraph>
        <FormattedMessage id="me.software.engineer.description" />
      </Paragraph>
    </DescriptionWrapper>
  </Wrapper>
);

export default Profile;
