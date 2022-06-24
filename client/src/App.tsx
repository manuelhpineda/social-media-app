import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
  MainContainer,
  InputContainer,
  ButtonContainer,
} from 'components/Container'
import { WelcomeText } from 'components/Text'
import { Input } from 'components/Inputs'
import Button from 'components/Button'

import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Button>test</Button>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <Input type="email" placeholder="Email Address" />
            <Input type="password" placeholder="Password" />
          </InputContainer>
          <ButtonContainer>
            <Button>Login</Button>
          </ButtonContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App
