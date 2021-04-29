import 'react-native-gesture-handler';
import React, {useEffect, useState}  from 'react';
import LogInScreen from './app/screens/LogInScreen';
import ElevatorStatusScreen from './app/screens/ElevatorStatusScreen';
import HomeScreen from './app/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Status" component={ElevatorStatusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App