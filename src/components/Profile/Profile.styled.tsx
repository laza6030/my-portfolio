import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  width: 50%;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;
