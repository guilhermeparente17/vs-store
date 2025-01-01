import { useEffect } from "react";
import * as S from "./styles";
import { useAuth } from "../../context/AuthContext";

const ContentDashboard = () => {
  const { products, handleProducts } = useAuth();

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <S.Container>
      <S.Title>Seja bem vindo, Admin!</S.Title>

      <S.Content>
        <S.CardContainer>
          <S.CardInfo>
            <S.CardInfoTitle>Número de produtos</S.CardInfoTitle>
            <S.CardInfoNumber>{products.length}</S.CardInfoNumber>
          </S.CardInfo>

          <S.CardInfo>
            <S.CardInfoTitle>Número de categorias</S.CardInfoTitle>
            <S.CardInfoNumber>0</S.CardInfoNumber>
          </S.CardInfo>

          <S.CardInfo>
            <S.CardInfoTitle>Número de vendas</S.CardInfoTitle>
            <S.CardInfoNumber>0</S.CardInfoNumber>
          </S.CardInfo>
        </S.CardContainer>
      </S.Content>
    </S.Container>
  );
};

export default ContentDashboard;
