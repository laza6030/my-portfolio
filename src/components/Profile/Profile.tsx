import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const Profile = () => (
  <>
    <StaticImage
      src="../../images/profile_1.png"
      alt="Profile picture"
      width={300}
      height={300}
      style={{
        borderRadius: 10,
      }}
    />
  </>
);

export default Profile;
