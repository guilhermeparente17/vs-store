import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenu = styled.div`
  margin-left: 10px;
`;

export const HeaderLogo = styled.div`
  font-weight: bold;
  margin-left: 20px;
`;

export const HeaderItems = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 20px;
`;

export const HeaderItem = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #000;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #fff;
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  font-size: 14px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
