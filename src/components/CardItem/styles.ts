import styled from "styled-components";

export const CardItemContainer = styled.div`
  width: 300px;
  height: 480px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  background-color: #fff;
  border-radius: 20px;
`;

export const CardItemImage = styled.img`
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0px 0px;
`;

export const CardItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Description = styled.span``;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Stars = styled.span`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const AddToCart = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  font-size: 14px;

  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 20px;
  outline: none;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #ccc;
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const BuyNow = styled.button`
  width: 150px;
  height: 50px;
  padding: 10px;
  font-size: 14px;
  background-color: #bf325f;
  border-radius: 20px;
  outline: none;
  font-size: 13px;
  border: 0;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #953f5a;
    transition: 0.2s ease-in-out;
  }

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
