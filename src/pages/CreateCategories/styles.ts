import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 20px;
`;

export const Title = styled.h3``;

export const Form = styled.form`
  width: 90%;
  height: 100%;
  border: 2px solid #bf325f;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormContent = styled.div`
  display: flex;
  gap: 20px;
  width: 300px;
  justify-content: space-between;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px;
  background-color: #bf325f;
  outline: none;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
