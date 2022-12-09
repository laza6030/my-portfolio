import styled from "styled-components";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

export const MainWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  height: 50px;
  align-items: center;
`;

export const MenuIcon = styled(MenuAltRight)`
  height: 40px;
  margin-right: 10px;
  color: ${({ theme }) => theme.text.main};
`;
