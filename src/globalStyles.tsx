import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
