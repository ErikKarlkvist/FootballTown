

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Game_Live_Content from './Game_Live_Content'

class Game_Live_page extends Component{
  render() {
    return (
    <AppStackNavigator/>
    );
  }
}

export default Game_Live_page;
const AppStackNavigator=StackNavigator({
 GameLive:{
 screen:Game_Live_Content
 }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});