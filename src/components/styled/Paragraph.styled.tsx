import styled from "styled-components";

const Paragraph = styled.p`
  font-family: Nunito;
  text-align: justify;
  color: ${({ theme }) => theme.text.main};
`;

export default Paragraph;
