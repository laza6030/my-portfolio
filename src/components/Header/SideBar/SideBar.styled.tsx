import { Link } from "gatsby";
import styled from "styled-components";
import { Close } from "@styled-icons/ionicons-outline/Close";

export const MainWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const CloseMenuIcon = styled(Close)`
  height: 40px;
  margin-right: 10px;
  color: ${({ theme }) => theme.text.main};
  margin-left: auto;
`;

export const MenuItem = styled(Link)`
  font-family: nunito;
  color: ${({ theme }) => theme.text.main};
`;
