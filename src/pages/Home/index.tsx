import { useEffect } from "react";
import Header from "../../components/Header";
import api from "../../api";

const Home = () => {
  const products = async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  useEffect(() => {
    products();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
