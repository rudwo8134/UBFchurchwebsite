import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size:  62.5%; // set font-size to 10px
    font-family: 'Roboto', sans-serif;
  }

  body{
    box-sizing: border-box;

  }
`;

export default GlobalStyle