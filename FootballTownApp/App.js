import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'react-native-firebase'
import MainScreen from './Components/MainScreen'
import {
StackNavigator
}from 'react-navigation'
export default class App extends React.Component {
  constructor(){
      super()
  }

 render() {
     return (
 <AppStackNavigator/>
     );
   }
 }
 const AppStackNavigator=StackNavigator({
       MainScreen:{
       screen:MainScreen
       }
 })


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
