import styled, { css } from 'styled-components'
import { space, typography, layout } from 'styled-system'

export const StyledButton = styled.button`
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

const buttonVariants = {
  primary: css`
    border: 1px solid red;
  `,
  outline: css`
    border: 1px solid blue;
  `,
}
