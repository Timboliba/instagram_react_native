import { View,Text,Image } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Send from '../../assets/send.png'
import Moussa from '../../assets/moussa.jpg'
import Mariam from '../../assets/Mariam.jpg'

import { useState } from "react"
const Post=({image,name,title})=>{
    const[like,setLike]=useState(185)
    const handleLike=()=>{
        setLike(like+1)
    }
    return<>
        <View className='postContainer'>
            <View className='postHeader' style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',paddingHorizontal:5,paddingVertical:10}}>
                <View userInformation style={{flexDirection:'row',alignItems:'center'}}>
                <LinearGradient
                    colors={['#962fbf', '#d62976','#FEDA75', '#fa7e1e']}

                    style={{
                        height: 45,
                        width: 45,
                        borderRadius: 50,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image source={image} style={{height:40,width:40,borderRadius:50,alignSelf:'center'}}/>
                </LinearGradient>
                    <Text style={{ marginLeft: 5 }}>{name}</Text>
                </View>
                <View className='option'>
                    <MaterialCommunityIcons name="dots-horizontal" size={25} color={'black'}/>
                </View>
            </View>
            <View className='imageContainer'>
                    <Image source={image} style={{height:450,width:450}}/>
            </View>
            <View className='iconContainer' style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                <View className='likeCommentContainer' style={{flexDirection:'row',alignContent:'center',justifyContent:'space-around'}}>
                    <MaterialCommunityIcons name='heart-outline' color={'black'} size={25} onPress={handleLike}/>
                    <MaterialCommunityIcons name='chat-outline' color={'black'} size={27}/>
                     <Image source={Send} style={{height:30,width:30}}/>
                </View>
                <View className='invoiceContainer'>
                    <MaterialCommunityIcons name='bookmark-outline' color={'black'} size={25}/>
                </View>
            </View>
            <View className='likecontaint' style={{paddingHorizontal:10,}}>
                <View className='like'>
                    <Text style={{color:'black',fontWeight:'700'}}>{like} likes</Text>
                </View>
                <View className='userinfo' style={{flexDirection:'row'}}>
                    <Text style={{ color: 'black', fontWeight: '700' }}>{name}</Text>
                    <Text style={{ color: 'black', fontWeight: '700' }}>{ title}</Text>
                </View>
            </View>
            <View className='commentContainer' style={{paddingHorizontal:10}}>
                <Text style={{color:'black',fontWeight:'700'}}>mimii_diallo et 285 personnes ont commenter</Text>
            </View>
        </View>
    </>
}

export default Post