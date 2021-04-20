import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../screens/Home/Home';
import { Settings } from '../screens/Settings/Settings';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          title: "XState App",
          headerStyle: {
            backgroundColor: "#0660cb",
          },
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 22,
            textAlign: "center",
          }, 
        }} 
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{ 
          title: "Settings",
          headerStyle: {
            backgroundColor: "#18af8a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: "#fff",
            fontWeight: "bold",
          }, 
        }} 
      />
    </Stack.Navigator>
  );
}

export const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator />  
    </NavigationContainer>
  )
}