import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reels from './Reels'
import Reel from './Reel'
const Stack=createNativeStackNavigator()
const ReelContaineur = () => {
  return (
    <Stack.Navigator 
        initialRouteName='Reels'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name='Reels' component={Reels}/>
        <Stack.Screen name='Reel' component={Reel}/>
    </Stack.Navigator>
  )
}

export default ReelContaineur

const styles = StyleSheet.create({})