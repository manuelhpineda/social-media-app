import React from 'react'
import { SpaceProps } from 'styled-system'

import { StyledButton } from './Styles'

interface Props extends SpaceProps {
  className?: string
  children?: React.ReactNode
  variant?: 'primary' | 'outline'
  icon?: React.ReactNode | string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  as?: any
}

const Button = ({
  children,
  variant = 'primary',
  isLoading,
  disabled,
  ...props
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      isLoading={isLoading}
      disabled={isLoading || disabled}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
