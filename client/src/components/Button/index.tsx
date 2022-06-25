import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'

import { StyledButton } from './Styles'

interface Props extends SpaceProps {
  className?: string
  children?: ReactNode
  variant?: 'primary' | 'outline'
  icon?: ReactNode | string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  isFull?: boolean
  as?: any
}

const Button = ({
  children,
  variant = 'primary',
  isLoading,
  disabled,
  isFull,
  ...props
}: Props) => {
  return (
    <StyledButton
      variant={variant}
      isLoading={isLoading}
      disabled={isLoading || disabled}
      isFull={isFull}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button
