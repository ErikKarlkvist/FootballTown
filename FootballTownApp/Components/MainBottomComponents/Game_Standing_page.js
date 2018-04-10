


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Game_Standing_Content from './Game_Standing_Content'
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'


class Game_Standing_page extends Component{
  render() {
    return (
 <AppStackNavigator/>
    );
  }
}

export default Game_Standing_page;
const AppStackNavigator=StackNavigator({
Gamestanding:{
screen:Game_Standing_Content
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