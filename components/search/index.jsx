import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const SearchPrincipal = ({navigation}) => {
  return (
      <View className='searchPrincipalContainer'>
          <View className='inputSearch' style={{paddingHorizontal:25,paddingVertical:15,backgroundColor:'white'}}>
              <TextInput placeholder='Search' style={{height:40,borderColor:'silver',borderWidth:1,backgroundColor:'silver'}}/>
          </View>
          <TouchableOpacity className='gridResultSearch' style={{backgroundColor:'black',height:'100%'}} onPress={()=>navigation.navigate('Details Of Search')}>
              
          </TouchableOpacity>
    </View>
  )
}

export default SearchPrincipal

const styles = StyleSheet.create({
  gridResultSearch: {
    backgroundColor: 'black',
    height: '100%'
  }
})