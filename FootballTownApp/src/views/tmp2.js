import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import firebase from 'react-native-firebase'


const News = require("../database/News").News()

export default class Tmp2 extends React.Component {
    constructor(){
        super()
        console.log(News.getNews())
        News.addNews({id: "000006",
            title: "Hello",
            text: "Bye"})
        console.log(News.getNews())
    }

  render() {
      return (
          <View style={styles.container}>
              <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg'}}></Image>
              <Text>{this.props.name}</Text>
              <TouchableOpacity onPress={this.props.onPress}>
                <Text>TMP2</Text>

              </TouchableOpacity>
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
