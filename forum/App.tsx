import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import React from "react"
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TransitionPresets } from '@react-navigation/stack';

import Cadastro from "./src/Screens/Cadastro";
import Login from "./src/Screens/Login";

const stack = createStackNavigator();

// const headerOptions = 

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
       /* initialRouteName="Cadastro" */>
        <stack.Screen name="Cadastrar" component={Cadastro} options={{ headerShown: false }} />
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}