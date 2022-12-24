import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    max-width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    font-size: 14px;
  }

  body {
    background-color: rgb(241, 242, 246);
    color: rgb(140, 145, 167);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
  }
    
`
export default GlobalStyle;