import React from "react";

import { FormattedMessage } from "gatsby-plugin-intl";
import { StaticImage } from "gatsby-plugin-image";

import { Paragraph } from "../styled";
import { Wrapper } from "./Profile.styled";

const Profile = () => (
  <Wrapper>
    <div
      style={{
        paddingLeft: 100,
        paddingRight: 100,
        width: "100%",
      }}
    >
      <StaticImage
        src="../../images/profile_1.png"
        alt="Profile picture"
        width={300}
        height={300}
        style={{
          borderRadius: 5,
        }}
      />
    </div>

    <div>
      <Paragraph>
        <FormattedMessage id="me.software.engineer.description" />
      </Paragraph>
    </div>
  </Wrapper>
);

export default Profile;
