import React from 'react';
import { AppRegistry, Text, View, YellowBox, StatusBar } from 'react-native';
//import firebase from 'react-native-firebase'
import MainNavigator from './src/navigation/MainNavigator';
const User = require("./src/database/User").User()
import MatchComponent from './src/component/MatchComponent';
import {Colors} from "./src/config/UIConfig"

export default class App extends React.Component {

  render() {
      return(

      <MainNavigator/>
      );
  }
}

YellowBox.ignoreWarnings([
  'Module RCTImageLoader',
  'RCTBridge required',
  'Required dispatch_sync',
  'Warning: isMounted',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
])


AppRegistry.registerComponent('App', () => App);
