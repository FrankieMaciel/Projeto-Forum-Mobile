import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Cadastro from "./src/Screens/Cadastro";
import Login from "./src/Screens/Login";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Cadastro">
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Cadastro" component={Cadastro} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
