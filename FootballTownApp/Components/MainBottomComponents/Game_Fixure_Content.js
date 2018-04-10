
import React from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import firebase from 'react-native-firebase'

import {
StackNavigator
}from 'react-navigation'
class Game_Fixure_Content extends React.Component {
  constructor(){
      super()
  }

 render() {
     return (
         <View style={styles.container}>
         <View style={styles.buttonContainer}>
           <Button title="09 April 2018, 2:00PM" color="#708090" accessibilityLabel="Tap on Me"/>
         </View>
         <Text style={styles.TextProp}>
                Team A   vs Team B
          </Text>
         <View style={styles.buttonContainer}>
           <Button title="10 April 2018, 4:00PM" color="#708090" accessibilityLabel="Tap on Me"/>
         </View>
         <Text style={styles.TextProp}>
                Team C   vs Team D
          </Text>

       </View>
     );
   }
 }

export default Game_Fixure_Content;
const styles = StyleSheet.create({
  container: {
      flex: 1,
       //backgroundColor: '#24cdda',
      //alignItems: 'center',
      //justifyContent: 'center',
  },
  image: {
      width: 250,
      height: 250,
  },
  buttonContainer: {
      backgroundColor: '#2E9298',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25
    },
    TextProp: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
     },
});
