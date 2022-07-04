import styled from "styled-components";
import { PersonSupport } from "@styled-icons/fluentui-system-filled/PersonSupport";
import { Code } from "@styled-icons/fluentui-system-regular/Code";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const CarrerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text.main};
  width: 220px;
  padding: 0 7px 0 7px;
  margin: 0 10px 0 10px;
`;

export const CareerTitle = styled.p`
  font-family: Varela Round;
  color: ${({ theme }) => theme.text.main};
`;

export const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
`;

export const StyledPersonSupport = styled(PersonSupport)`
  width: 150px;
  color: ${({ theme }) => theme.text.white};
`;

export const StyledCode = styled(Code)`
  width: 150px;
  color: ${({ theme }) => theme.text.white};
`;
