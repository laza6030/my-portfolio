import styled from "styled-components";

export const Tool = styled.div`
  width: max-content;
  font-family: Nunito;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  color: ${({ theme }) => theme.text.white};
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ToolsWrapper = styled.div`
  margin-right: 100px;
`;
