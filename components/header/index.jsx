import { View, Text, Image,ScrollView, ImageBackground, TouchableOpacity,StyleSheet} from 'react-native'
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

const index = () => {
    const Stories=[
    {
        id: '1',
        image:Pipi,
        username: 'abdramane_swd',
      },
      {
        id: '2',
        image:CR7,
        username: 'cristiano',
      },
      {
        id: '3',
        image:Mariam,
        username: 'mimii_diallo',
      },
      {
        id: '4',
        image:Moussa,
        username: 'moussa_timboliba',
      },
      {
        id: '5',
        image:Ozil,
        username: 'm10_official',
      }, {
        id: '6',
        image:Basse,
        username: 'bassforreal',
      },
      {
        id: '7',
        image:Culti,
        username: 'cultination.officiel',
      },
      {
        id: '8',
        image:Bocar,
        username: 'bocar_ly',
      }
]
    return <>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',height:60,paddingHorizontal:18,paddingVertical:15,elevation:1,backgroundColor:'white'}}>
         <View>
            <Image source={Instagram} style={{height:38,width:125}}/>        
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             <MaterialCommunityIcons name="heart-outline" size={30} color={'black'}/>
             <Image source={Send} style={{height:30,width:30,marginLeft:10}}/>
         </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingHorizontal:5,paddingVertical:10}}>
            <View style={{ alignItems: 'center', marginRight: 15}}>
                <LinearGradient
                    colors={['#962fbf', '#d62976','#FEDA70', '#fa7e1e']}

                    style={{
                        height: 84,
                        width: 84,
                        borderRadius: 50,
                        alignSelf: 'center',
                        justifyContent: 'center'
                    }}
                >
                        <Image source={Poste} style={{ height: 79, width: 79, borderRadius: 50,borderColor:'white',borderWidth:3,alignSelf:'center'}} />
                </LinearGradient>
                <MaterialCommunityIcons name='plus' color={'white'} style={{position:'absolute',zIndex:100,top:59,left:57,borderRadius:50,backgroundColor:'#2A93D5'}} size={22} />
                <Text>Your Stories</Text>
            </View>
            {Stories.map((item) => {
                return <>
                    <View style={{alignItems:'center',marginRight:15}} key={item.id}>
                        <LinearGradient
                            colors={['#962fbf', '#d62976','#FEDA75', '#fa7e1e']}

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
                        <Text>{item.username}</Text>
                    </View>
                </>
            })}
        </ScrollView>
    </>
}
export default index