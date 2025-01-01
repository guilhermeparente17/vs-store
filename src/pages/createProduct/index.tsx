import { Controller, useForm } from "react-hook-form";
import * as S from "./styles";
import Input from "../../components/Input";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Product } from "../../dto/product";
import { useEffect, useState } from "react";
import Select from "react-select";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    // formState: { errors },
  } = useForm<Product>();

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (data: Product) => {
    try {
      const response = await api.post("/products", {
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
        categoryId: data.categoryId.value,
      });

      if (response.data) {
        navigate("/dashboard/products");
        toast.success("Produto criado com sucesso!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos, tente novamente.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleCategories = async () => {
    try {
      const response = await api.get("/categorys");

      if (response.data) {
        const data = response.data.map(
          (category: { name: string; id: string }) => {
            return {
              value: category.id,
              label: category.name,
            };
          }
        );
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleCategories();
  }, []);

  return (
    <S.Container>
      <S.Title>Novo Produto</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormContent
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <S.Inputs>
            <Input
              color="#000"
              label="Nome"
              register={register("name")}
              placeholder="Nome"
            />
            <Input
              label="Descrição"
              color="#000"
              register={register("description")}
              placeholder="Descrição"
            />
            <div style={{ width: "300px" }}>
              <label>Categorias</label>
              <Controller
                name="categoryId"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={categories}
                    placeholder="Selecione uma categoria"
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption); // Atualiza o estado do react-hook-form
                    }}
                    value={field.value}
                  />
                )}
              />
            </div>
            <Input
              label="Composição"
              color="#000"
              register={register("composition")}
              placeholder="Composição"
            />
            <Input
              label="Tamanho"
              color="#000"
              register={register("size")}
              placeholder="Tamanho"
            />
            <Input
              label="Cor"
              color="#000"
              register={register("color")}
              placeholder="Cor"
            />
            <Input
              label="Preço"
              color="#000"
              register={register("price")}
              placeholder="Preço"
            />
            <Input
              label="Quantidade"
              color="#000"
              register={register("quantity")}
              placeholder="Quantidade"
            />
            <Input
              label="Imagem"
              color="#000"
              register={register("image_url")}
              placeholder="Imagem"
            />
          </S.Inputs>

          <div>
            <S.productImg src={watch("image_url")} />
          </div>
        </S.FormContent>

        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default CreateProduct;
