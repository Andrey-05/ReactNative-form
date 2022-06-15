import styled from 'styled-components/native'
import {Animated} from 'react-native'

export const InputText = styled.TextInput`
    height: 40px;
    width: 100%;
    margin-top: 10px;
    color: #fff;
    padding-left: 12px;
    padding-right: 12px;
`
export const InputArea = styled.View`
    height: 50px;
    width: 100%;
    background-color: #414AB0;
    margin-top: 30px;
    border-style: solid; 
    border-bottom-color: ${props => props.focus ? '#FFA306': '#FFF'}; 
    border-bottom-width: 2px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
export const InputAreaLabel = styled(Animated.View)`
    position: absolute;
    left: 10px;
`
export const InputLabel = styled.Text`
    color: ${props => props.focus ? '#FFA306': '#FFF'}
`