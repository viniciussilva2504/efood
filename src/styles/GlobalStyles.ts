import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: #fff8f2;
    color: #e66767;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 8px;

    @media (max-width: 1040px) {
      padding: 0 16px;
    }
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyles