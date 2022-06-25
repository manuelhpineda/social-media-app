import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'
import { UseFormProps } from 'react-hook-form'

import { StyledButton } from './Styles'

interface Props extends SpaceProps, UseFormProps {
  className?: string
  children?: ReactNode
  variant?: 'primary' | 'outline'
  icon?: ReactNode | string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  isFull?: boolean
  as?: any
  type?: 'button' | 'submit'
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
