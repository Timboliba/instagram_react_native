import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

const HeaderAccount = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:15,elevation:1,paddingHorizontal:15}}>
      <View>
          <Text style={{fontSize:26,color:'black'}}>hamadi_timboliba</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name='at' size={26} color={'black'}/>
        <MaterialCommunityIcons name='plus-box-outline' size={26} color={'black'} style={{marginLeft:10}}/>
        <MaterialCommunityIcons name='view-headline' size={26} color={'black'}  style={{marginLeft:10}}/>
      </View>
    </View>
  )
}

export default HeaderAccount

const styles = StyleSheet.create({})