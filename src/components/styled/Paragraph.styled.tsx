import styled, { keyframes } from "styled-components";

const animation = (top?: number) => keyframes`
  from {
    top: ${top}px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Paragraph = styled.p<{
  top?: number;
  duration?: number;
  delay?: number;
}>`
  position: relative;
  font-family: Nunito;
  text-align: justify;
  margin: 5px;
  color: ${({ theme }) => theme.text.white};
  opacity: 0;
  animation: ${({ top }) => animation(top)};
  animation-duration: ${({ duration }) => duration}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;
