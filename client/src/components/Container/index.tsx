import React, { ReactNode } from 'react'
import { StyledContainer } from 'components/Container/Styles'
import { LayoutProps, SpaceProps } from 'styled-system'

interface Props extends SpaceProps, LayoutProps {
  children?: ReactNode
}

const Container = ({ children, ...rest }: Props) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

export default Container
