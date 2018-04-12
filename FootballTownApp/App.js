import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import firebase from 'react-native-firebase'
import Tmp from "./src/views/tmp"
import Tmp2 from "./src/views/tmp2"
const User = require("./src/database/User").User()

export default class App extends React.Component {
  constructor(){
      super()
      this.state = {
        showTmp: true
      }
  }

  render() {
      if(this.state.showTmp){
        return (<Tmp onPress={() => {this.setState({showTmp: false})}}/>)
      } else {
        return (<Tmp2 onPress={() => {this.setState({showTmp: true})}}/>)
      }
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
