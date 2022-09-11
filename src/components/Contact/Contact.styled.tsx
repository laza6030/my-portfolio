import styled, { keyframes } from "styled-components";
import { CustomLink } from "../styled";

const descriptionAnimation = keyframes`
from {
  top: 50px;
  opacity: 0;
}

to {
  top: 0;
  opacity: 1;
}
`;

const ctaAnimation = keyframes`
from {
  top: 70px;
  opacity: 0;
}

to {
  top: 0;
  opacity: 1;
}
`;

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Description = styled.p`
  position: relative;
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
  animation-name: ${descriptionAnimation};
  animation-duration: 1.25s;
`;

export const LetsBuild = styled.div`
  width: 100%;
  text-align: center;
`;

export const CTA = styled(CustomLink)`
  position: relative;
  width: fit-content;
  text-decoration: none;
  text-transform: capitalize;
  animation-name: ${ctaAnimation};
  animation-duration: 1.5s;
`;

export const IconWrapper = styled.div`
  width: 40px;
  color: ${({ theme }) => theme.text.white};
  margin-right: 5px;
`;

export const ContactValue = styled.div`
  display: flex;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
  align-items: center;
  margin: 10px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;
