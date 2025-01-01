import { useForm } from "react-hook-form";
import * as S from "./styles";
import api from "../../api";
import Input from "../../components/Input";
import backgroundImage from "../../assets/background-login.jpg";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type loginProps = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<loginProps>();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: loginProps) => {
    try {
      const response = await api.post("/users/login", data);
      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
      });

      if (response.data) {
        setToken(true);
        localStorage.setItem("authToken", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Dados incorretos, tente novamente.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <S.LoginContainer
      style={{
        background: `url(${backgroundImage}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <S.LoginContent>
        <S.LoginTitle>Login</S.LoginTitle>

        <S.LoginForm
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%" }}
        >
          <S.WrapLogin>
            <S.Label htmlFor="">Email</S.Label>
            <Input type="email" register={register("email")} />
          </S.WrapLogin>

          <S.WrapLogin>
            <S.Label htmlFor="">Password</S.Label>
            <Input type="password" register={register("password")} />
          </S.WrapLogin>

          {/* {errors && <span>This field is required</span>} */}

          <div style={{ display: "flex", gap: "20px" }}>
            <S.ButtonLogin type="submit">Login</S.ButtonLogin>
            <S.ButtonLogin onClick={() => navigate("/")}>Voltar</S.ButtonLogin>
          </div>
        </S.LoginForm>
      </S.LoginContent>
    </S.LoginContainer>
  );
};

export default Login;
