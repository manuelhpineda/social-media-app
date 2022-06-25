import React, { forwardRef } from 'react'
import { SpaceProps, TypographyProps } from 'styled-system'

import { ErrorMessage, InputElement } from './Styles'

interface Props extends SpaceProps, TypographyProps {
  placeholder: string
  className?: string
  invalid?: boolean
  message?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

type Ref = HTMLInputElement

const Input = forwardRef<Ref, Props>(
  ({ placeholder, invalid, message, onChange, type, ...rest }, ref) => {
    return (
      <>
        <InputElement
          onChange={onChange}
          ref={ref}
          placeholder={placeholder}
          type={type}
          invalid={invalid}
          {...rest}
        />
        {message && <ErrorMessage invalid={invalid}>{message}</ErrorMessage>}
      </>
    )
  }
)

export default Input
