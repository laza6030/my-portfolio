import styled from "styled-components";

export const MainWrapper = styled.div<{ isReverse: boolean }>`
  display: flex;
  flex-direction: ${({ isReverse }) => (isReverse ? "row-reverse" : "row")};
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const Section = styled.div`
  margin: 10px;
  width: 50%;
`;

export const Name = styled.h2`
  font-family: Ubuntu;
  color: ${({ theme }) => theme.text.main};
`;

export const Description = styled.p`
  font-family: nunito;
  color: ${({ theme }) => theme.text.main};
  background: #222c3a;
  padding: 20px;
`;

export const Techno = styled.div`
  min-width: fit-content;
  font-family: nunito;
  color: ${({ theme }) => theme.text.highlight};
  margin: 10px;
`;

export const StyledLink = styled.a`
  display: flex;
  width: 30px;
  color: ${({ theme }) => theme.text.main};
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
