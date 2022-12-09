import styled, { keyframes } from "styled-components";

const bottomToUpAnimation = keyframes`
  from {
    top: 10px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Greeting = styled.p`
  position: relative;
  font-size: 40px;
  margin: 0px;
  opacity: 0;
  animation: ${bottomToUpAnimation} 500ms linear;
  animation-fill-mode: forwards;
`;

export const Name = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.text.highlight};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.text.highlight};
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const TitleWrapper = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const StyledImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  opacity: 0;
  animation: ${bottomToUpAnimation} 500ms linear;
  animation-fill-mode: forwards;
`;
