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

  ${space}
`

// ${(props) => buttonVariants[props.variant]}

type Specific = Record<'primary' | 'outline', string>

const buttonVariants = {
  primary: css`
    border: 1px solid red;
  `,
  outline: css`
    border: 1px solid blue;
  `,
}
