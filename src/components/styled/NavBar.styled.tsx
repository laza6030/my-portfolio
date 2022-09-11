import { Link } from "gatsby";
import styled from "styled-components";

export const StyledNavBar = styled.div<{ colorChange: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 30px;
  padding-right: 40px;
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  z-index: 1;
  background: none;
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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text.main};
  text-decoration: none;
  padding-bottom: 5px;
  transition-property: border-bottom;
  transition-duration: 3s;

  &:after {
    display: block;
    content: "";
    border-bottom: 1px solid ${({ theme }) => theme.text.main};
    width: 115%;
    position: relative;
    left: -6px;
    transform: scaleX(0);
    transition: transform 260ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
