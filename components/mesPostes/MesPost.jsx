import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MesPost = () => {
  return (
    <View style={{alignItems:'center',justifyContent:'center',paddingVertical:100,height:'100%'}}>
      <View style={{borderWidth:1,borderRadius:120/2,height:120,width:120,alignItems:'center',justifyContent:'center'}}>
        <MaterialCommunityIcons name='camera-outline' size={90} color={'black'}/>
      </View>
      <Text style={{color:'black',fontSize:19,fontWeight:'700'}}>Aucune publication</Text>
    </View>
  )
}

export default MesPost

const styles = StyleSheet.create({})