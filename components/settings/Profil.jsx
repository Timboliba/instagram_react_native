import { StyleSheet, Text, View,Image,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfilPicture from'../../assets/moussa.jpg'

const Profil = () => {
  return <>
    <View className='containerProfil'>
          <View className='profil_information' style={styles.profil_information}>
              <MaterialCommunityIcons name='plus' color={'white'} style={styles.materielIconPlus} size={22} />
              <View className='userPicture&information'>
                  <Image source={ProfilPicture} style={styles.img} />
                  <Text style={styles.texte}>TIMBOLIBA</Text>
              </View>
              <View className='containt-following-information' style={styles.containtFollowingInformation}>
                  <View className='post-container' style={{alignItems:'center'}}>
                      <Text style={styles.texte}>0</Text>
                      <Text style={styles.texte}>Publications</Text>
                  </View>
                  <View className='flowwer-container' style={styles.flowwerContainer}>
                      <Text style={styles.texte}>2 000</Text>
                      <Text style={styles.texte}>folowers</Text>
                  </View>
                  <View className='follow-container' style={styles.flowwerContainer}>
                      <Text style={styles.texte}>10</Text>
                      <Text style={styles.texte}>Suivi(e)s</Text>
                  </View>
            </View>
          </View>  
          <View className='bouton-modify' style={styles.boutonModifyConatianer}>
              <TouchableOpacity style={styles.touchableOpacity}>
                  <View>
                      <Text style={styles.texte}>Modifier</Text>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity  style={styles.touchableOpacityPartageProfil}>
                  <View>
                      <Text style={styles.texte}>Partager profil</Text>
                  </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name='account-plus-outline' color={'black'} size={30} style={styles.accountPlusPutline} />
            </TouchableOpacity>
          </View>
    </View>
  </>
}

export default Profil

const styles = StyleSheet.create({
    boutonModifyConatianer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingHorizontal:15,
        paddingVertical:17,
        alignItems:'center'
    },
    touchableOpacity:{
        borderWidth: 1,
        borderColor:'silver',
        width:142,
        alignItems:'center',
        paddingVertical: 5,
        borderRadius:5,
        backgroundColor:'silver'
    },
    touchableOpacityPartageProfil:{
        borderWidth:1,
        borderColor:'silver',
        width:190,
        alignItems:'center',
        marginLeft:5,
        paddingVertical:5,
        borderRadius:5,
        backgroundColor:'silver'
    },
    texte:{
        color:'black',
        fontSize:16,
        fontWeight:'bold'
    },
    img:{
        height: 79,
        width: 79,
        borderRadius: 50 
    },
    materielIconPlus:{
        position:'absolute',
        zIndex:100,
        top:60,
        left:74,
        borderRadius:50,
        backgroundColor:'#2A93D5',
        borderColor:'white',
        borderWidth:1
    },
    containtFollowingInformation:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profil_information:{ 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 15, 
        paddingVertical: 10 
    },
    flowwerContainer:{
        alignItems:'center',
        marginLeft:25,
    },
    accountPlusPutline:{
        backgroundColor: 'silver',
        paddingHorizontal:5,
        borderWidth:1,
        borderColor:'silver',
        borderRadius:5,
        marginLeft:5
    }

})