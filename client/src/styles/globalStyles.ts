import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'Raleway', sans-serif;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`
