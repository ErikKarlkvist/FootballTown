import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'react-native-firebase'
import Comp from './comp.js'

export default class App extends React.Component {
  constructor(){
    super()
    console.log(firebase)
  }

  render() {
    return (
        <Comp name={"Demo Hello!"}></Comp>
    );
  }
}
