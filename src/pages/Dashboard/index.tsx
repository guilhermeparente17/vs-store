import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { TiArrowForwardOutline } from "react-icons/ti";
import ContentDashboard from "../ContentDashboard";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const renderRouteContent = () => {
    if (location.pathname === "/dashboard") {
      return <ContentDashboard />;
    }
  };

  return (
    <S.DashboardContainer>
      <S.Sidebar>
        <S.SidebarTitle>V Store</S.SidebarTitle>

        <S.SidebarMenu>
          <S.Menu>
            <S.Section>
              <span>Dashboard:</span>

              <Link to="/dashboard">
                <S.Item>
                  <S.ItemName>Dashboard</S.ItemName>
                  <TiArrowForwardOutline size="20" color="#fff" />
                </S.Item>
              </Link>
            </S.Section>
            <S.Section>
              <span>Produtos:</span>

              <Link to="/dashboard/products">
                <S.Item>
                  <S.ItemName>Produtos</S.ItemName>
                  <TiArrowForwardOutline size="20" color="#fff" />
                </S.Item>
              </Link>
              <Link to="/dashboard/create-product">
                <S.Item>
                  <S.ItemName>Criar Produto</S.ItemName>
                  <TiArrowForwardOutline size="20" color="#fff" />
                </S.Item>
              </Link>
            </S.Section>
            <S.Section>
              <span>Categorias:</span>
              <Link to="/dashboard/categories">
                <S.Item>
                  <S.ItemName>Categorias</S.ItemName>
                  <TiArrowForwardOutline size="20" color="#fff" />
                </S.Item>
              </Link>
              <Link to="/dashboard/create-categories">
                <S.Item>
                  <S.ItemName>Criar Categorias</S.ItemName>
                  <TiArrowForwardOutline size="20" color="#fff" />
                </S.Item>
              </Link>
            </S.Section>
          </S.Menu>
        </S.SidebarMenu>

        <S.LogoutMenu>
          <S.ButtonLogout
            onClick={() => {
              handleLogout();
            }}
          >
            Sair
          </S.ButtonLogout>
        </S.LogoutMenu>
      </S.Sidebar>
      <S.Content>
        {renderRouteContent()}
        <Outlet />
      </S.Content>
    </S.DashboardContainer>
  );
};

export default Dashboard;
