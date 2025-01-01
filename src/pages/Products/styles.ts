import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin: 40px;
  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Cor do fundo da barra de rolagem */
    border-radius: 10px; /* Bordas arredondadas do track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bf325f; /* Cor da parte interativa da barra de rolagem */
    border-radius: 10px; /* Bordas arredondadas do thumb */
    border: 2px solid #f1f1f1; /* Borda em volta do thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8244c; /* Cor do thumb quando o usuário passa o mouse sobre ele */
  }
`;

export const ProductsContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const ProductsTitle = styled.h3``;

export const ProductsList = styled.div``;
