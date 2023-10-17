import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Car from './components/Car';
import Rent from './components/Rent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} option={{title:"Inicio de sesion"}}/> 
        <Stack.Screen name="Car" component={Car} option={{title:"Datos Vehiculo"}}/>
        <Stack.Screen name="Rent" component={Rent} option={{title:"Rentar"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


