import styled from 'styled-components'
import { space, typography } from 'styled-system'

import { theme } from 'theme'

interface Props {
  invalid?: boolean
}

export const StyledInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${space}
  ${typography}
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

  &:focus {
    outline: 1px solid #bdbdbd;
  }
`

export const ErrorMessage = styled.span<Props>`
  display: inline-block;
  font-size: 0.75rem;
  color: ${theme.colors.danger};
  margin-bottom: 5px;
`
