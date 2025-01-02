import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Cor e transparência da camada */
    z-index: 1; /* Certifique-se de que os conteúdos estejam acima */
  }
`;

export const LoginContent = styled.div`
  width: 400px;
  height: fit-content;
  backdrop-filter: blur(10px);

  position: absolute;
  z-index: 999;
  border: 1px solid #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
`;

export const LoginTitle = styled.h2`
  font-size: 30px;
  color: #fff;
`;

export const WrapLogin = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const ButtonLogin = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  background-color: #b09674;
  border: 0;
  color: #fff;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
