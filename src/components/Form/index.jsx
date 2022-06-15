import React from 'react'

import Input from '../../components/Input'
import Buttom from '../../components/Buttom'

const Form = () => {
    return(
        <>
            <Input textLabel={"Nome"}/>
            <Input textLabel={"Email"}/>
            <Input textLabel={"Senha"}/>
            <Buttom textLabel={"Entrar"}/>
        </>
    )
}

export default Form