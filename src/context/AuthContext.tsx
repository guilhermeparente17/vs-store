// src/context/AuthContext.tsx
import React, { createContext, useState, useContext } from "react";
import api from "../api";
import { Product } from "../dto/product";

// Tipagem para o contexto
type AuthContextProps = {
  token: boolean | null;
  setToken: (token: boolean) => void;
  products: Product[];
  handleProducts: () => void;
};

// Criando o contexto
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Provider para encapsular a aplicação
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<boolean>(false); // Estado para o token
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, products, handleProducts }}>
      {children}
    </AuthContext.Provider>
  );
};

/*eslint-disable react-refresh/only-export-components */
// isso pode dar ruim no futuro, ficar esperto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
