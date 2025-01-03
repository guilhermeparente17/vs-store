import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import * as S from "./styles";
import { Product } from "../../dto/product";
import CardItem from "../CardItem";

const HeroContent = () => {
  const { handleProducts, products } = useAuth();

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <S.HeroContainer>
      <S.Title>Get Inspired</S.Title>

      <S.SubTitle>
        The world's leading community for creatives to share, grow, and get
        hired.
      </S.SubTitle>

      <S.FilterContainer>
        <S.FilterContent>
          <S.FilterSearch />
          <span>filtro de categoria</span>
        </S.FilterContent>

        <S.Button>Buscar</S.Button>
      </S.FilterContainer>

      <S.ProductsList>
        {products.map((product: Product, index) => (
          <CardItem {...product} key={index} />
        ))}
      </S.ProductsList>
    </S.HeroContainer>
  );
};

export default HeroContent;
