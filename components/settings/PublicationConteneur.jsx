import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Reel from '../reels/Reels';
import { TabBarItem } from 'react-native-tab-view';
import MesPost from '../mesPostes/MesPost';
import Reels from '../../screens/reels';
import MesIdentifications from '../identifactions/MesIdentifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReelContaineur from '../reels';
const Tab = createMaterialTopTabNavigator();

function PublicationConteneur() {
  return (
    <Tab.Navigator
    initialRouteName='Publications'
    tabBarOptions={{
        showIcon:true ,//active l'affichage des icons du topBottom
        tabStyle: { flexDirection: 'row' }, // Alignez les onglets horizontalement
        indicatorStyle: { backgroundColor: 'black' }, //changer la couleur de l'indicateur au slide 
      }}

    >
      <Tab.Screen name="Publications" component={MesPost}
        options={{
          tabBarLabel:"",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='grid' size={26} color={'silver'}/>
          )
        }}
      />
      <Tab.Screen name="Reels" component={ReelContaineur}
        options={{
          tabBarLabel:"",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='movie-play-outline' size={26} color={'silver'}/>
          )
        }}
      />
      <Tab.Screen name="Identifications" component={MesIdentifications}
        options={{
          tabBarLabel:"",
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name='clipboard-account-outline' size={26} color={'silver'}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default PublicationConteneur;

