import React from 'react'
import { SpaceProps } from 'styled-system'

import { StyledButton } from './Styled'

interface Props extends SpaceProps {
  className?: string
  children?: React.ReactNode
  childrenElement?: JSX.Element
  variant?: string
  icon?: React.ReactNode | string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  as?: string
}

const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
