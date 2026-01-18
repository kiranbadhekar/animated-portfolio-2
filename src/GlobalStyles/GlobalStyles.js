import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f0f23, #141414ff);
    color: #fff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }


`;
