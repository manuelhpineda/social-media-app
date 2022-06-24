import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from 'theme'
import Project from 'Project'

import BaseStyles from './BaseStyles'

const App = () => {
  return (
    <>
      <BaseStyles />
      <ThemeProvider theme={theme}>
        <Project />
      </ThemeProvider>
    </>
  )
}

export default App
