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

  @media (max-width: 425px) {
    flex-direction: row;
    position: relative;
    height: auto;
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;

export const StyledLink = styled.a`
  width: 40px;
  color: ${({ theme }) => theme.text.main};
  margin: 10px;
`;
