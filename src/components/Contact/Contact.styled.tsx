import styled from "styled-components";
import { CustomLink } from "../styled";

export const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Description = styled.p`
  font-family: Nunito;
  color: ${({ theme }) => theme.text.white};
`;

export const LetsBuild = styled.div`
  width: 100%;
  text-align: center;
`;

export const CTA = styled(CustomLink)`
  width: fit-content;
  text-decoration: none;
  text-transform: capitalize;
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
