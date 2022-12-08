import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainMenu from './pages/MainMenu'
import VideoAnimasi from './pages/VideoAnimasi'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="VideoAnimasi" component={VideoAnimasi} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}