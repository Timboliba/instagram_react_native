import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/home"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AddPost from './screens/addPost/index'
import Reels from './screens/reels/index'
import Settings from "./screens/settings"
import Search from'./screens/search/index'

const Task=createMaterialBottomTabNavigator()
const App = () => {
  return <>
    <NavigationContainer>
      <Task.Navigator
        barStyle={{backgroundColor:'white'}}
      >
        <Task.Screen name="Home" component={Home}
          options={{
            tabBarLabel:"",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={'black'} size={27} />
            )
          }}
        />
        <Task.Screen name="Search" component={Search}
          options={{
            tabBarLabel:"",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="magnify" color={'black'} size={27} />
            )
          }}
        />
        <Task.Screen name="Add" component={AddPost}
          options={{
            tabBarLabel:"",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="plus-box-outline" color={'black'} size={27} />
            )
          }}
        />
        <Task.Screen name="magnify" component={Reels}
        options={{
            tabBarLabel:"",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="movie-play-outline" color={'black'} size={27} />
            )
          }}
        />
        <Task.Screen name="Settings" component={Settings}
          options={{
            tabBarLabel:"",
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account-circle-outline" color={'black'} size={25} />
            )
          }}
        />
      </Task.Navigator>
    </NavigationContainer>
  </>
}

export default App