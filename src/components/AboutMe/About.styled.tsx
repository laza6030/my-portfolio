import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
`;
