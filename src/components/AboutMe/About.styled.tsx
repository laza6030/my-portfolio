import styled from "styled-components";

export const MainWrapper = styled.div`
  padding-left: 100px;
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
`;
