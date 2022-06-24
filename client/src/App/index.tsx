import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import BaseStyles from './BaseStyles'

const App = () => {
  return (
    <>
      <BaseStyles />
      <ThemeProvider theme={theme}>
        <h1>hello world</h1>
      </ThemeProvider>
    </>
  )
}

export default App
