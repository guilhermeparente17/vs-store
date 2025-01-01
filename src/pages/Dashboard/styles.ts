import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 999;
`;

export const Content = styled.div`
  width: 80%;
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
`;

export const SidebarTitle = styled.h3`
  text-align: center;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  width: 200px;
  padding: 10px;
  border: 1px solid #be315d;
  background-color: #be315d;
  border-radius: 10px;
  justify-content: space-between;
  transition: 0.2s ease-in-out;

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const LogoutMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  color: #fff;

  padding: 20px;
`;

export const SidebarMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonLogout = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  background-color: #be315d;
  border: 0;
  color: #fff;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
  }
`;

export const ItemName = styled.span`
  color: #fff;
  font-weight: 600;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
