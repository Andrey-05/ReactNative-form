import { StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './src/screens/Login'
import Register from './src/screens/Register'

const Stack = createNativeStackNavigator();

const app = () => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name='Home' component={Login}/>
			<Stack.Screen name='Others' component={Register}/>
		</Stack.Navigator>
		<StatusBar style='auto'/>
	</NavigationContainer>
)

export default app