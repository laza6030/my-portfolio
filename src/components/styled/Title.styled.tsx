import styled, { keyframes } from "styled-components";

const animation = (top: number) => keyframes`
  from {
    top: ${top}px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Title = styled.h1<{
  top: number;
  duration: number;
  delay: number;
}>`
  position: relative;
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
  text-align: start;
  display: inline-block;
  opacity: 0;
  animation: ${({ top }) => animation(top)};
  animation-duration: ${({ duration }) => duration}s;
  animation-delay: ${({ delay }) => delay}s;
  animation-fill-mode: forwards;
`;
