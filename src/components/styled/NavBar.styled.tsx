import { Link } from "gatsby";
import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin: 10px 0 30px 0;
  padding-right: 40px;
`;

export const StyledNavItem = styled.li`
  font-family: Nunito;
  list-style: none;
  margin: 0 35px;
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
    transform: scaleX(0);
    transition: transform 260ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
