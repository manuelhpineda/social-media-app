import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {MainContainer, InputContainer,ButtonContainer} from './components/Container'
import {WelcomeText} from './components/Text'
import {Input} from './components/Inputs'
import {Button} from './components/Buttons'

function App() {
  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer>
      <Input type="email" placeholder="Email Address"  />
      <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button>Login</Button>
      </ButtonContainer>
    </MainContainer>
    )
}

export default App