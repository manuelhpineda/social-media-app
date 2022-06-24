import styled, { css } from 'styled-components'
import { space, typography, layout } from 'styled-system'

interface Props {
  variant: string
}

export const StyledButton = styled.button<Props>`
  position: relative;
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  vertical-align: middle;
  font-size: 14px;

  ${(props) => buttonVariants[props.variant as keyof Specific]}

  ${space}
`

type Specific = Record<'primary' | 'outline', any>

const buttonVariants: Specific = {
  primary: css`
    border: 1px solid red;
  `,
  outline: css`
    border: 1px solid green;
  `,
}
