import { Product } from "../../dto/product";
import * as S from "./styles";

const CardItem = (product: Product) => {
  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  return (
    <S.CardItemContainer>
      <S.CardItemImage src={product.image_url} alt={product.name} />

      <S.CardItemInfo>
        <S.Name>{product.name}</S.Name>
        <S.Description>{truncateText(product.description, 50)}</S.Description>
        <S.Price>R$ {product.price}</S.Price>
      </S.CardItemInfo>
    </S.CardItemContainer>
  );
};

export default CardItem;
