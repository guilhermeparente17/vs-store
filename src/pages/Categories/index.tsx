import { useEffect, useState } from "react";
import api from "../../api";
import * as S from "./styles";
import { toast } from "react-toastify";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const handleCategories = async () => {
    try {
      const response = await api.get("/categorys");

      if (response.data) {
        setCategories(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    try {
      await api.delete(`/categorys/${id}`);
      handleCategories();
      toast.success("Categoria excluída com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Title>Categorias</S.Title>

      <S.Content>
        {categories.map((category: { name: string; id: string }) => {
          return (
            <S.Card key={category.id}>
              <S.CardTitle>{category.name}</S.CardTitle>
              <S.DeleteButton onClick={() => handleDeleteCategory(category.id)}>
                Deletar
              </S.DeleteButton>
            </S.Card>
          );
        })}
      </S.Content>
    </S.Container>
  );
};

export default Categories;
