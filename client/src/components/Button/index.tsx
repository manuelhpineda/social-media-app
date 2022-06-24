import React from 'react'
import { SpaceProps } from 'styled-system'

import { StyledButton } from './Styled'

interface Props extends SpaceProps {
  children: JSX.Element[] | JSX.Element | string
}

const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
