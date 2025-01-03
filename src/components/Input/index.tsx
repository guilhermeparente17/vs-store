import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";
import TextError from "../TextError";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn;
  color?: string;
  borderColor?: string;
  label?: string;
  errorMessage?: string;
};

const Input: React.FC<InputProps> = ({ register, errorMessage, ...props }) => {
  return (
    <S.InputContainer>
      <label>{props.label}</label>
      <S.InputFormat {...register} {...props} />
      {errorMessage && <TextError name={errorMessage} />}
    </S.InputContainer>
  );
};

export default Input;
