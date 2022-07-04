import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 33.33%;
`;

export const LogoWrapper = styled.div`
  width: 70px;
  color: ${({ theme }) => theme.text.main};
`;

export const Name = styled.p`
  margin: unset;
  font-family: Nunito;
  margin-left: 15px;
`;

export const PercentageWrapper = styled.div`
  width: 200px;
  height: 20px;
  background: ${({ theme }) => theme.text.main};
`;

export const Percentage = styled.div<{ percentage: number }>`
  width: ${({ percentage }) => percentage}%;
  height: 20px;
  background: ${({ theme }) => theme.title.main};
`;
