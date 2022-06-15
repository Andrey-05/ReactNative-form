import React, {useState, useRef} from 'react'
import {InputArea, InputLabel, InputAreaLabel, InputText} from './styles'
import {Animated} from 'react-native'

const Input = ({textLabel}) => {
    const [isFocus, setIsFocus] = useState(false)
    const [texto, setTexto] = useState('')

    const move = useRef(new Animated.ValueXY({x: 0, y: 15})).current
    const size = useRef(new Animated.Value(1)).current

    const handlerFocus = (focus) => {
        setIsFocus(focus)
        handlerAnimation(focus)
    }

    const handlerAnimation = (focus) => {
        if(focus || texto){
            Animated.timing(move, {
                useNativeDriver: true,
                toValue: {x: -2, y: 4},
                duration: 100,
            }).start()
            Animated.timing(size, {
                useNativeDriver: true,
                toValue: 0.80,
                duration: 100,
            }).start()
        }
        else{
            Animated.timing(move, {
                useNativeDriver: true,
                toValue: {x: 0, y: 15},
                duration: 100,
            }).start()
            Animated.timing(size, {
                useNativeDriver: true,
                toValue: 1,
                duration: 100,
            }).start()
        }
    }

    return(
        <InputArea focus={isFocus}>
            <InputAreaLabel style={{translateY: move.y, translateX: move.x, scaleX: size, scaleY: size}}>
                <InputLabel focus={isFocus}>{textLabel}</InputLabel>
            </InputAreaLabel>
            <InputText
                onChangeText={text => setTexto(text)}
                onFocus={() => {
                    handlerFocus(true)
                }}
                onBlur={() => {
                    handlerFocus(false)
                }}
            />
        </InputArea>
    )
}

export default Input