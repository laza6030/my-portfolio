import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from {
    top: 30px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
  animation-name: ${animation};
  animation-duration: 1s;
`;
