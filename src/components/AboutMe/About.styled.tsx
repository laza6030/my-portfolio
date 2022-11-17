import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Greeting = styled.p`
  font-size: 40px;
  margin: 0px;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
  animation: ${animation};
  animation-duration: 2.5s;
`;

export const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
