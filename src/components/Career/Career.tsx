import React from "react";
import { useIntl } from "gatsby-plugin-intl";

import Paragraph from "../styled/Paragraph.styled";
import SubTitle from "../styled/SubTitle.styled";
import Wrapper from "../styled/Wrapper.styled";

const Career = () => {
  const intl = useIntl();

  return (
    <Wrapper id="my-career">
      <SubTitle>{intl.formatMessage({ id: "my.it.carrer" })}</SubTitle>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, officia
        fugit! Eligendi enim fugit aperiam deserunt, quas animi, maiores illo
        rerum a nemo corporis impedit vitae, perferendis in repellat quia
        expedita quisquam? Accusamus consequuntur, provident maxime tempora
        debitis eligendi illo assumenda cum minus suscipit modi rerum ut, neque
        quia corporis?
      </Paragraph>
    </Wrapper>
  );
};

export default Career;
