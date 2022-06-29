import styled from "styled-components"
import { space } from "styled-system"
import {theme} from '../../theme'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: ${theme.background.light};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform:uppercase;
    letter-spacing: 0.4rem;
    ${space}
    
`

export const InputContainer = styled.div`
    margin: 1rem 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;

`

export const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

