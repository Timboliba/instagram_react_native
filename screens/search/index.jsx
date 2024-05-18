import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchPrincipal from '../../components/search'
import Details from '../../components/search/Details'

const Stack=createNativeStackNavigator()
const Search = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName='Search Principal'
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name='Search Principal' component={SearchPrincipal} />
            <Stack.Screen name='Details Of Search' component={Details}/>
      </Stack.Navigator>
  )
}

export default Search

const styles = StyleSheet.create({})