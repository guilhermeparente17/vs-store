import styled from "styled-components";

export const CardItemContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CardItemImage = styled.img`
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const CardItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  margin: 0px 0px;
  width: 200px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const Description = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
