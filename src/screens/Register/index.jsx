import React from 'react'
import {Text, Button, View} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const Area1 = ({navigation}) => {
    return(
        <View>
            <Text>Essa é a tela 1</Text>
            <Button title="pagina 2" onPress={() => navigation.navigate('area2')}/>
        </View>
    )
}
const Area2 = ({navigation}) => {
    return(
        <View>
            <Text>Essa é a tela 2</Text>
            <Button title="pagina 1" onPress={() => navigation.navigate('area1')}/>
        </View>
    )
}

export default function Register(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="area1" component={Area1}/>
            <Stack.Screen name="area2" component={Area2}/>
        </Stack.Navigator>
    )
}