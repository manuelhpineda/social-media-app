import React from 'react'
import { SpaceProps } from 'styled-system'

import { StyledInput } from './styled'

interface Props extends SpaceProps {
  children: JSX.Element[] | JSX.Element | string,

}

const Input = ({ children,   ...props}: Props) => {
   return <StyledInput {...props}>{children}</StyledInput>
}

export default Input
