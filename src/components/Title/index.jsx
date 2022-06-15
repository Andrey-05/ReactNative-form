import React from 'react'
import {TitleArea, TitleLabel} from './styles'

const Title = ({textLabel}) => {
    return(
        <TitleArea>
            <TitleLabel>{textLabel}</TitleLabel>
        </TitleArea>
    )
}

export default Title