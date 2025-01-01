import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
`;

export const Title = styled.h3``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Card = styled.div`
  width: 200px;
  background-color: darkgray;
  height: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardTitle = styled.h4``;

export const DeleteButton = styled.button`
  width: 100px;
  height: 30px;
  text-align: center;
  outline: none;
  border: 0;
  background-color: #bf325f;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
