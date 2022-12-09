import styled from "styled-components";
import { MenuAltRight } from "@styled-icons/boxicons-regular/MenuAltRight";

export const MainWrapper = styled.div<{ colorChange: boolean }>`
  position: fixed;
  top: 0px;
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  z-index: 1;

  transition: background 250ms;
  ${(props) => {
    if (props.colorChange) {
      return `
      background: #2e3245;
      box-shadow: 0 0 5px 0;
      transition: background 250ms;
      `;
    }
  }}
`;

export const MenuIcon = styled(MenuAltRight)`
  height: 40px;
  margin-right: 10px;
  color: ${({ theme }) => theme.text.main};
`;
