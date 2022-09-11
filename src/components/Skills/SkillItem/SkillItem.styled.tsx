import styled, { keyframes } from "styled-components";

const percentageAnimation = (width: number) => keyframes`
  from {
    width: 0
  }

  to {
    width: ${width}%
  }
`;

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

export const Percentage = styled.div<{ percentage: number; inView: boolean }>`
  width: ${({ percentage }) => percentage}%;
  height: 20px;
  background: ${({ theme }) => theme.title.main};
  animation-name: ${({ percentage, inView }) =>
    inView ? percentageAnimation(percentage) : ""};
  animation-duration: ${({ percentage }) => percentage / 100 + 0.5}s;
  animation-timing-function: ease-in;
`;
