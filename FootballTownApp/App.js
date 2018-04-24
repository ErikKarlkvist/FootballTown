import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
//import firebase from 'react-native-firebase'
import MainNavigator from './src/navigation/MainNavigator';
const User = require("./src/database/User").User()
import MatchComponent from './src/component/MatchComponent';

export default class App extends React.Component {
  constructor(){
      super()
      this.state = {
        showTmp: true
      }
  }

  render() {
      return(
      <MainNavigator/>

      );
  }
}


AppRegistry.registerComponent('App', () => App);
