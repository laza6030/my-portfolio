import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-left: 40px;
  margin-top: 80px;
  margin-bottom: 100px;

  @media (max-width: 425px) {
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
