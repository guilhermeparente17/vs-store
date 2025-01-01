import { useEffect } from "react";
import * as S from "./styles";
import { Product } from "../../dto/product";
import Card from "../../components/card";
import { useAuth } from "../../context/AuthContext";

const Products = () => {
  const { products, handleProducts } = useAuth();

  useEffect(() => {
    handleProducts();
  }, [handleProducts]);

  return (
    <S.ProductsContainer>
      <S.ProductsTitle>Produtos</S.ProductsTitle>

      <S.ProductsContent>
        {products.map((product: Product, index) => (
          <Card {...product} key={index} handleProducts={handleProducts} />
        ))}
      </S.ProductsContent>
    </S.ProductsContainer>
  );
};

export default Products;
