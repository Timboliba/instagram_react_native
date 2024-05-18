// import React from 'react';
// import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
// import Video from 'react-native-video';

// const { width } = Dimensions.get('window');
// const NUM_COLUMNS = 2; // Nombre de colonnes dans la grille

// const data = [
//   { id: '1', uri: require('../../assets/teste.mp4') },
//   { id: '2', uri: require('../../assets/teste.mp4') },
//   { id: '3', uri: require('../../assets/teste.mp4') },
//   { id: '4', uri: require('../../assets/teste.mp4') },
//   { id: '5', uri: require('../../assets/teste.mp4') },
//   { id: '6', uri: require('../../assets/teste.mp4') },
// ];

// const renderItem = ({ item }) => (
//   <View style={styles.item}>
//     <Video
//       source={item.uri}
//       style={styles.video}
//       resizeMode="contain"
//     />
//   </View>
// );

// const ReelGrid = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={NUM_COLUMNS}
//       />
//     </View>
//   );
// }

// export default ReelGrid;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 10,
//     backgroundColor: 'white',
//   },
//   item: {
//     flex: 1,
//     margin: 2,
//     width: (width - 10) / NUM_COLUMNS,
//     aspectRatio: 0.25, // Garantit que les vidéos sont carrées
//     overflow: 'hidden',
//   },
//   video: {
//     flex: 1,
//     height:100,
//   },
// });



import React from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');
const NUM_COLUMNS = 2; // Nombre de colonnes dans la grille

const data = [
  { id: '1', uri: require('../../assets/teste.mp4') },
  { id: '2', uri: require('../../assets/teste.mp4') },

  { id: '3', uri: require('../../assets/teste.mp4') },
  { id: '4', uri: require('../../assets/teste.mp4') },
  { id: '5', uri: require('../../assets/teste.mp4') },
  { id: '6', uri: require('../../assets/teste.mp4') },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Video
      source={item.uri}
      style={styles.video}
      resizeMode="cover"
    />
  </View>
);

const ReelGrid = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
      />
    </View>
  );
}

export default ReelGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    margin: 5,
    width: (width - 20) / NUM_COLUMNS,
    aspectRatio: 1, // Garantit que les vidéos sont carrées
    overflow: 'hidden',
  },
  video: {
    flex: 1,
  },
});
