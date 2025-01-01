import { FiUser } from "react-icons/fi";
import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      {/* <S.HeaderMenu>
        <IoMenuSharp size="30" />
      </S.HeaderMenu> */}

      <S.HeaderLogo>VS Store</S.HeaderLogo>

      <S.HeaderMenu>
        <S.Menu>
          <S.Item>Shop</S.Item>
          <S.Item>Cart</S.Item>
        </S.Menu>
      </S.HeaderMenu>

      <S.HeaderItems>
        <S.HeaderItem to="/login">
          <FiUser />
          login
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  );
};

export default Header;
