import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Categories from "./pages/Categories";
import CreateCategories from "./pages/CreateCategories";

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            {/* Rotas filhas dentro de /dashboard */}
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="create-categories" element={<CreateCategories />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
