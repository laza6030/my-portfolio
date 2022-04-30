import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const DescriptionWrapper = styled.div``;

export const LogoWrapper = styled.div`
  width: 70px;
`;

export const Name = styled.p`
  font-family: Nunito;
  text-transform: uppercase;
`;

export const PercentageWrapper = styled.div`
  width: 200px;
  height: 20px;
  background: ${({ theme }) => theme.text.main};
`;

export const Percentage = styled.div`
  //   width: 50%;
  height: 20px;
  background: ${({ theme }) => theme.title.main};
`;
