import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
  MainContainer,
  InputContainer,
  ButtonContainer,
} from './components/Container'
import { WelcomeText } from './components/Text'
import  Input  from './components/Input'
import Button from './components/Button'

import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <MainContainer>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <Button variant="primary">Login</Button>
          </ButtonContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App
