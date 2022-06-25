import React, { forwardRef } from 'react'
import { SpaceProps, TypographyProps } from 'styled-system'

import {
  ErrorMessage,
  InputElement,
  StyledInput,
} from 'components/Input/Styles'

interface Props extends SpaceProps, TypographyProps {
  placeholder: string
  className?: string
  invalid?: boolean
  message?: string
  onChange?: () => any
  type?: string
}

export type Ref = HTMLInputElement

const Input = forwardRef<Ref, Props>(
  ({ placeholder, invalid, message, onChange, type, ...rest }, ref) => {
    return (
      <StyledInput {...rest}>
        <InputElement
          onChange={onChange}
          ref={ref}
          placeholder={placeholder}
          type={type}
          invalid={invalid}
        />
        {message && <ErrorMessage invalid={invalid}>{message}</ErrorMessage>}
      </StyledInput>
    )
  }
)

export default Input
