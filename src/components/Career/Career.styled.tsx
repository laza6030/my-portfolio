import styled from "styled-components";
import { PersonSupport } from "@styled-icons/fluentui-system-filled/PersonSupport";
import { Code } from "@styled-icons/fluentui-system-regular/Code";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarrerItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  margin-left: 20px;
  color: ${({ theme }) => theme.text.white};
  font-family: Nunito;
`;

export const StyledPersonSupport = styled(PersonSupport)`
  width: 150px;
`;

export const StyledCode = styled(Code)`
  width: 150px;
`;
