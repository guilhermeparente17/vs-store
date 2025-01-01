import { IoMenuSharp } from "react-icons/io5";
import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderMenu>
        <IoMenuSharp size="30" />
      </S.HeaderMenu>

      <S.HeaderLogo>VS Store</S.HeaderLogo>

      <S.HeaderItems>
        {/* <S.HeaderItem>About</S.HeaderItem>
        <S.HeaderItem>Faqs</S.HeaderItem> */}
        <S.HeaderItem to="/login">login</S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  );
};

export default Header;
