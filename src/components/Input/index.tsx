import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn;
  color?: string;
  borderColor?: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({ register, ...props }) => {
  return (
    <S.InputContainer>
      <label>{props.label}</label>
      <S.InputFormat {...register} {...props} />
    </S.InputContainer>
  );
};

export default Input;
