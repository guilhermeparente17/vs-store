import styled from "styled-components";

export const HeroContainer = styled.div`
  padding: 0px 40px;
  margin-top: 40px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-weight: 500;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const FilterSearch = styled.input`
  width: 300px;
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 10px;
  font-size: 14px;
`;

export const FilterContent = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  text-align: center;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;

export const ProductsList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;
