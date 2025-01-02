import React from "react";
import * as S from "./styles";

type TextErrorProps = {
  name: string | undefined;
};

const TextError: React.FC<TextErrorProps> = ({ name }) => {
  return <S.Text>{name}</S.Text>;
};

export default TextError;
