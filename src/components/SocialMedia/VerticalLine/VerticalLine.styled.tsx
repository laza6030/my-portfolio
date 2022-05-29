import styled from "styled-components";

export const Wrapper = styled.div`
  height: 120px;
  width: 0;
  border-right: 1px solid ${({ theme }) => theme.text.main};
`;
