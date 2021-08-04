import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size:  50.0%; // set font-size to 8px
    font-family: 'Roboto', sans-serif;
  }

  body{
    box-sizing: border-box;

  }
`;

export default GlobalStyle