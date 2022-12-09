import styled, { keyframes } from "styled-components";
import { Link } from "gatsby-plugin-intl";

const logoAnimation = keyframes`
0% {
  top: -40px;
  opacity: 0;
}
100% {
  top: 0px;
  opacity: 1;
}`;

export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  background: unset;
  font-family: Ubuntu;
  margin: 0 auto 0 15px;
  color: ${({ theme }) => theme.text.main};
  border: 1px solid ${({ theme }) => theme.text.main};
  padding: 5px 20px;
  height: 20px;
  transition-property: background, color;
  transition-duration: 0.4s;
  animation-name: ${logoAnimation};
  animation-duration: 1s;

  &:hover {
    background: ${({ theme }) => theme.text.main};
    color: ${({ theme }) => theme.background.main};
    cursor: pointer;
  }
`;
