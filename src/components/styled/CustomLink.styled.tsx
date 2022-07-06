import styled from "styled-components";

export const CustomLink = styled.a`
  background: unset;
  font-family: Ubuntu;
  margin: 0 auto 0 15px;
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
