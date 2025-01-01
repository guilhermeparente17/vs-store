import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 400px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;
  border-radius: 10px 10px 0px 0px;
`;

export const CardContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  background-color: #ccc;
  border-radius: 7px;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

export const CardInfo = styled.div`
  padding: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: #ccc;
  overflow: hidden;
`;

export const RemoveButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 0;
  outline: none;
  background-color: #bf325f;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Description = styled.span`
  max-width: 50ch;
  text-overflow: ellipsis;
  text-align: center;
`;
