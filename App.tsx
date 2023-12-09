import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

import React from "react"
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TransitionPresets } from '@react-navigation/stack';

// Telas
import Cadastro from "./src/Screens/Cadastro";
import Login from "./src/Screens/Login";
import { Dashboard } from './src/Screens/Dashboard';
import { Profile } from './src/Screens/Perfil';
import { SearchScreen } from './src/Screens/Search';

const stack = createStackNavigator();

// const headerOptions = 

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={TransitionPresets.SlideFromRightIOS}
        initialRouteName="Login"
      >
        <stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <stack.Screen name="Cadastrar" component={Cadastro} options={{ headerShown: false, headerStyle: { backgroundColor: '#ffffff' } }} />
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        {/* <stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} /> */}
        <stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}