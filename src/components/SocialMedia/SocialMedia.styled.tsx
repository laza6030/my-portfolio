import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35px;
  height: 310px;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  position: fixed;
  bottom: 0px;
  color: ${({ theme }) => theme.text.main};
`;

export const StyledLink = styled.a`
  width: 100%;
  color: ${({ theme }) => theme.text.main};
`;
