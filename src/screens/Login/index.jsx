import {React, useState, useRef} from 'react'

import {ModalArea} from './styles'
import {Animated, TouchableWithoutFeedback} from 'react-native'

import Title from '../../components/Title'
import Form from '../../components/Form'
import Division from '../../components/Division'
import SocialButtons from '../../components/SocialButtons'

const First = () => {
    const [check, setCheck] = useState(false)

    const value = useRef(new Animated.Value(150)).current

    const HandlerModal = () => {
        if(check){
            Animated.timing(value, {
                useNativeDriver: true,
                toValue: 650,
                duration: 500,
            }).start()
            setCheck(false)
        }
        else{
            Animated.timing(value, {
                useNativeDriver: true,
                toValue: 150,
                duration: 500,
            }).start()
            setCheck(true)
        }
    }
    return(
        <TouchableWithoutFeedback onPress={HandlerModal}>
            <ModalArea style={{translateY: value}} >
                <Title textLabel={"Login"}/>
                <Form/>
                <Division textLabel={"Ou"}/>
                <SocialButtons/>
            </ModalArea>
        </TouchableWithoutFeedback>
    )
}

export default First