import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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
  justify-content: space-around;
  margin-top: 80px;
`;

export const Description = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
  animation: ${animation};
  animation-duration: 2.5s;
`;
