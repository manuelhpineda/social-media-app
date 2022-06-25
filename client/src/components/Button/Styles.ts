import styled, { css } from 'styled-components'
import { space, typography, layout, width } from 'styled-system'
import { TailSpin } from 'react-loader-spinner'

interface Props {
  variant: string
  isFull?: boolean
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
  padding: 2px 16px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 3px;
  transition: all 0.1s;
  appearance: none;
  text-transform: capitalize;

  ${(props) =>
    props.isFull &&
    css`
      width: 100%;
    `}

  ${(props) => buttonVariants[props.variant as keyof Specific]}

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }

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

export const SpinnerContainer = styled.div`
  position: absolute;
  left: 3px;
`
