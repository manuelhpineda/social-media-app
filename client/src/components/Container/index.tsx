import React from 'react'
import { SpaceProps } from 'styled-system'

import { MainContainer } from './Styles'

interface Props extends SpaceProps{
    className?: string
    children?: React.ReactNode
    as?: any
}

const Main = ({
    children,
    className,
    ...Props
}: Props) =>{
    return(
        <MainContainer className={className}>
            {children}
        </MainContainer>
    )
}

export default Main