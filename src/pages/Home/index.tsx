import Header from "../../components/Header";
import HeroContent from "../../components/HeroContent";
import * as S from "./styles";

const Home = () => {
  return (
    <S.HomeContainer>
      <Header />
      <HeroContent />
    </S.HomeContainer>
  );
};

export default Home;
