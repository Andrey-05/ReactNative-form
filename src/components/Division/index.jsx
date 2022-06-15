import React from 'react'
import {DivisionArea, DivisionLine, DivisionText} from './styles'

const Division = ({textLabel}) => {
    return(
        <DivisionArea>
            <DivisionLine/>
            <DivisionText>{textLabel}</DivisionText>
            <DivisionLine/>
        </DivisionArea>
    )
}

export default Division