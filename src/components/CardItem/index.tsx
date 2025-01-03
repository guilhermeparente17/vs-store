import { MdStar } from "react-icons/md";
import { Product } from "../../dto/product";
import * as S from "./styles";

const CardItem = (product: Product) => {
  return (
    <S.CardItemContainer>
      <S.CardItemImage src={product.image_url} alt={product.name} />

      <S.CardItemInfo>
        <S.Name>{product.name}</S.Name>
        <S.PriceContainer>
          <S.Stars>
            5.0 <MdStar size="20" color="#f29d4e" />
          </S.Stars>
          <S.Price>R$ {product.price}</S.Price>
        </S.PriceContainer>

        <S.Buttons>
          <S.AddToCart>Adicionar ao carrinho</S.AddToCart>
          <S.BuyNow>Comprar Agora</S.BuyNow>
        </S.Buttons>
      </S.CardItemInfo>
    </S.CardItemContainer>
  );
};

export default CardItem;
