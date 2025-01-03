import { Controller, useForm } from "react-hook-form";
import * as S from "./styles";
import Input from "../../components/Input";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Product } from "../../dto/product";
import { useEffect, useState } from "react";
import Select from "react-select";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextError from "../../components/TextError";

type ProductSchema = Pick<
  Product,
  | "name"
  | "description"
  | "price"
  | "quantity"
  | "composition"
  | "size"
  | "image_url"
  | "color"
  | "categoryId"
>;

const schema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(6, "O nome deve ter no mínimo 6 caracteres"),
  description: yup
    .string()
    .min(10, "A descrição deve ter no mínimo 10 caracteres")
    .required("Descrição é obrigatória"),
  price: yup
    .number()
    .required("Preço é obrigatório")
    .min(1, "O preço deve ser maior que zero"),
  quantity: yup
    .number()
    .required("Quantidade é obrigatória")
    .min(1, "A quantidade deve ser maior que zero"),
  composition: yup.string().required("Composição é obrigatória"),
  size: yup.string().required("Tamanho é obrigatório"),
  image_url: yup.string().required("Imagem é obrigatória"),
  color: yup.string().required("Cor é obrigatória"),
  categoryId: yup
    .object({
      value: yup.string().required("Categoria é obrigatória"),
      label: yup.string().required("Categoria é obrigatória"),
    })
    .required("Categoria é obrigatória"),
});

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: yupResolver(schema),
  });

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const onSubmit = async (data: ProductSchema) => {
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
              errorMessage={errors.name?.message}
            />
            <Input
              label="Descrição"
              color="#000"
              register={register("description")}
              placeholder="Descrição"
              errorMessage={errors.description?.message}
            />
            <div style={{ width: "300px" }}>
              <label>Categorias</label>
              <Controller
                name="categoryId"
                control={control}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      options={categories}
                      placeholder="Selecione uma categoria"
                      onChange={(selectedOption) => {
                        field.onChange(selectedOption); // Atualiza o estado do react-hook-form
                      }}
                      value={field.value}
                    />

                    {errors.categoryId && (
                      <TextError
                        name={
                          errors.categoryId.value?.message ||
                          "Erro na seleção da categoria"
                        }
                      />
                    )}
                  </>
                )}
              />
            </div>
            <Input
              label="Composição"
              color="#000"
              register={register("composition")}
              placeholder="Composição"
              errorMessage={errors.composition?.message}
            />
            <Input
              label="Tamanho"
              color="#000"
              register={register("size")}
              placeholder="Tamanho"
              errorMessage={errors.size?.message}
            />
            <Input
              label="Cor"
              color="#000"
              register={register("color")}
              placeholder="Cor"
              errorMessage={errors.color?.message}
            />
            <Input
              label="Preço"
              color="#000"
              register={register("price")}
              placeholder="Preço"
              errorMessage={errors.price?.message}
            />
            <Input
              label="Quantidade"
              color="#000"
              register={register("quantity")}
              placeholder="Quantidade"
              errorMessage={errors.quantity?.message}
            />
            <Input
              label="Imagem"
              color="#000"
              register={register("image_url")}
              placeholder="Imagem"
              errorMessage={errors.image_url?.message}
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
