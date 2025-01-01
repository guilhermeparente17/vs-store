import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.div`
  margin-left: 10px;
`;

export const HeaderLogo = styled.div`
  font-weight: bold;
`;

export const HeaderItems = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 20px;
`;

export const HeaderItem = styled(Link)`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
