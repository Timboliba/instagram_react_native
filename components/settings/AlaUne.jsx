import { View, Text, Image,ScrollView, ImageBackground, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Instagram from '../../assets/Instagram_logo.svg.png'
import Send from '../../assets/send.png'
import Poste from '../../assets/poste1.jpg'
import Ozil from '../../assets/mezut_ozil.jpeg'
import Basse from '../../assets/basseforreal.jpg'
import Culti from '../../assets/cultination_officiel.jpg'
import CR7 from '../../assets/Cr7.jpg'
import Mariam from '../../assets/Mariam.jpg'
import Bocar from '../../assets/bocar_ly.jpg'
import Moussa from '../../assets/moussa.jpg'
import Pipi from '../../assets/pipi.jpg'
import LinearGradient from 'react-native-linear-gradient'



const AlaUne = () => {

       const Stories=[
    {
        id: '1',
        image:Pipi,
        title: 'A la une',
      },
      {
        id: '2',
        image:CR7,
        title: 'A la une',
      },
      {
        id: '3',
        image:Mariam,
        title: 'A la une',
      },
      {
        id: '4',
        image:Moussa,
        title: 'A la une',
      },
      {
        id: '5',
        image:Ozil,
        title: 'A la une',
      }, {
        id: '6',
        image:Basse,
        title: 'A la une',
      }
]


    return<View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 5,paddingVertical:5}}>
            {Stories.map((item) => {
                return <View style={{height:84}}>
                    <View style={{alignItems:'center',marginRight:15,}} key={item.id}>
                        <LinearGradient
                            colors={['#8b8b8b', '#b7b7b7', '#cccccc', '#b7b7b7']}

                            style={{
                                height: 84,
                                width: 84,
                                borderRadius: 50,
                                alignSelf: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image source={item.image} style={{height:79,width:79,borderRadius:50,borderColor:'white',borderWidth:3,alignSelf:'center'}} />
                        </LinearGradient>
                        <Text>{item.title}</Text>
                    </View>
                </View>
            })}
             <View style={{ alignItems: 'center', marginRight: 15 }}>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#FFF', '#FFF', '#FFF', '#FFF']}
                    style={{
                        height: 84,
                        width: 84,
                        borderRadius: 50,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <MaterialCommunityIcons name='plus' size={35} color={'black'} style={{ alignItems: 'center', paddingHorizontal: 25 }} />
                </LinearGradient>
            </TouchableOpacity>
            <Text style={{ color: 'black' }}>Nouveau</Text>
        </View>
        </ScrollView>
    </View>
}

export default AlaUne

const styles = StyleSheet.create({})