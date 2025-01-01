import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import * as S from "./styles";
import api from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Category } from "../../dto/categorie";

const CreateCategories = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Category>();

  const navigate = useNavigate();

  const onSubmit = async (data: Category) => {
    try {
      await api.post("/categorys", {
        ...data,
      });

      navigate("/dashboard/categories");
      toast.success("Categoria criada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos, tente novamente.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <S.Container>
      <S.Title>Criar categoria</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormContent>
          <Input
            color="#000"
            label="Nome"
            register={register("name")}
            placeholder="Nome"
          />
          <S.Button type="submit">Criar</S.Button>
        </S.FormContent>
      </S.Form>
    </S.Container>
  );
};

export default CreateCategories;
