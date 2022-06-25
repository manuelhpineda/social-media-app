import styled, { css } from 'styled-components'
import { space, typography, layout } from 'styled-system'

import { theme } from 'theme'

interface Props {
  invalid?: boolean
}

const invalidStyles = css`
  border: 1px solid ${theme.colors.danger};
`

export const InputElement = styled.input<Props>`
  display: block;
  width: 100%;
  padding: 0.875em 1em;
  font-weight: 400;
  font-size: 1rem;
  height: 3.125rem;
  border: none;
  color: #151515;
  background: ${theme.colors.inputBackground};
  border-radius: 5px;
  -moz-outline-radius: 5px;

  &:focus {
    outline: 1px solid #bdbdbd;
  }

  ${(props) => props.invalid && invalidStyles}

  ${space}
  ${typography}
  ${layout}
`

export const ErrorMessage = styled.span<Props>`
  display: inline-block;
  font-size: 0.75rem;
  color: ${theme.colors.danger};
  margin-bottom: 5px;
`
