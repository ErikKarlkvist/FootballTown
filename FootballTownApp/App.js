import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'react-native-firebase'
import Comp from './comp.js'

export default class App extends React.Component {
  constructor(){
      super()
  }

  render() {
      return (
          <View style={styles.container}>
              <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg'}}></Image>
              <Text>{this.props.name}</Text>
              <Text>Alex was here</Text>
                  <Text>Testing git push</Text>
              <Text></Text>
          </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#24cdda',
      alignItems: 'center',
      justifyContent: 'center',
  },
  image: {
      width: 250,
      height: 250,
  },
});
