import React from 'react'
import { SpaceProps } from 'styled-system'

import { WelcomeText } from './Styles'

interface Props extends SpaceProps{
    children?: React.ReactNode
    as?: any
}

const Welcome = ({
    children,
    ...Props
}: Props) =>{
    return (
        <WelcomeText>
            {children}
        </WelcomeText>
    )
}

export default Welcome