import styled, { keyframes } from "styled-components";

const animation = (top: number) => keyframes`
  from {
    opacity: 0;
    top: ${top}px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`;

export const MainWrapper = styled.div<{ top: number; inView: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 20%;
  min-height: 350px;
  box-shadow: 0 0 4px -1px ${({ theme }) => theme.text.white};
  padding: 10px 20px 0 20px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 0 5px -1px ${({ theme }) => theme.text.white};
  }
  animation-name: ${({ top, inView }) => (inView ? animation(top) : "")};
  animation-duration: 1s;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
  border-bottom: 1px solid ${({ theme }) => theme.text.white};
`;

export const Description = styled.div`
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
`;

export const ToolWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Tool = styled.p`
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
  border: 1px solid ${({ theme }) => theme.text.white};
  width: max-content;
  padding: 0 5px 0 5px;
  border-radius: 10px;
  margin-bottom: unset;
`;
