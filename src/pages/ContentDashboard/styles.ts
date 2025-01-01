import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 40px;
`;

export const Title = styled.h3``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px;
  width: 150px;
  height: 100px;
  border-radius: 15px;
  flex-direction: column;
  background-color: #bf325f;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CardInfoTitle = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const CardInfoNumber = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
