import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 100vw;
    margin: 0 auto;
    padding: 80px 40px;
  }
`;
