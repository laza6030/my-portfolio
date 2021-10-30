import styled from "styled-components";

export const StyledLogo = styled.div`
  font-family: Ubuntu;
  margin-right: auto;
  margin-left: 60px;
  color: ${({ theme }) => theme.text.main};
  border: 1px solid ${({ theme }) => theme.text.main};
  padding: 5px 20px;
  transition-property: background, color;
  transition-duration: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.text.main};
    color: ${({ theme }) => theme.background.main};
    cursor: pointer;
  }
`;
