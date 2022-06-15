import React from 'react'
import {ButtomArea, ButtomLabel} from './styles'


const Buttom = ({textLabel}) => {
    return(
        <ButtomArea>
            <ButtomLabel>{textLabel}</ButtomLabel>
        </ButtomArea>
    )
}

export default Buttom