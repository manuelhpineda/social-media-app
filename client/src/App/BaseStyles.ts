import { createGlobalStyle } from 'styled-components'
import { devices, theme } from 'theme'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: ${theme.fonts.poppins};
    font-weight: 400;
    line-height: 1.75;
    background-image: ${theme.background.lightGradient};
    background-repeat: no-repeat;
  }

  ul {
    list-style: none;
  }

  p {
    a {
      cursor: pointer;
      color: inherit;
      font-size: inherit;
      font-weight: inherit;
    }
  }

  h1, h2, h3, h4, h5 {
    font-family: ${theme.fonts.poppins};
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 1.802rem;
  }

  h2 {
    font-size: 1.602rem;
  }

  h3 {
    font-size: 1.424rem;
  }

  h4 {
    font-size: 1.266rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  small, .text_small {
    font-size: 0.8rem;
  }

  ${devices.lg} {
    h1 {
      font-size: 3.052rem;
    }

    h2 {
      font-size: 2.441rem;
    }

    h3 {
      font-size: 1.953rem;
    }

    h4 {
      font-size: 1.563rem;
    }

    h5 {
      font-size: 1.25rem;
    }
  }

  [role="button"], button, input, textarea {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0;
    font-family: ${theme.fonts.poppins};
  }

`
