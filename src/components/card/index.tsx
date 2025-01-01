import { toast } from "react-toastify";
import api from "../../api";
import { Product } from "../../dto/product";
import * as S from "./styles";

const Card = ({
  name,
  description,
  id,
  price,
  quantity,
  image_url,
  handleProducts,
}: Product) => {
  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);
      toast.success("Produto excluído com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });
      handleProducts();
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos, tente novamente.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <S.CardContainer>
      <S.CardContent>
        <S.CardImage src={image_url} alt={name} />
        <S.CardInfo>
          <S.CardTitle>{name}</S.CardTitle>
          <S.Description>{truncateText(description, 50)}</S.Description>
          <span>R$ {price.toFixed(2)}</span>
          <span>Quantidade: {quantity}</span>
        </S.CardInfo>
        <S.RemoveButton
          onClick={() => {
            handleDelete(id);
          }}
        >
          Excluir
        </S.RemoveButton>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default Card;
