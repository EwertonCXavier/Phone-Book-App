import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @media(max-width: 576px) {
    html {
      font-size: 0.625;
    }
  }

`;

export default GlobalStyle;
