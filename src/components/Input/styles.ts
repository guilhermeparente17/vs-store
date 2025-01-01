import styled from "styled-components";

type InputProps = {
  color?: string;
  borderColor?: string;
};

export const InputFormat = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${({ borderColor }) => (borderColor ? borderColor : "#ccc")};
  outline: none;
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => (color ? color : "#fff")};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
