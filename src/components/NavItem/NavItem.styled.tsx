import styled, { keyframes } from "styled-components";

const navItemAnimation = (top: number) => keyframes`
    0% {
    top: -${top}px;
    opacity: 0;
    }
    100% {
    top: 0px;
    opacity: 1;
  }`;

export const StyledNavItem = styled.li<{ top: number }>`
  position: relative;
  font-family: Nunito;
  list-style: none;
  opacity: 1;
  margin: 0 35px;
  animation-name: ${(props) => navItemAnimation(props.top)};
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
`;
