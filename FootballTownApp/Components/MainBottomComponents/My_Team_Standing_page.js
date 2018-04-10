




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
import My_Team_Standing_Content from './My_Team_Standing_Content'

class My_Team_Standing_page extends Component{
  render() {
    return (
<AppStackNavigator/>
    );
  }
}

export default My_Team_Standing_page;
const AppStackNavigator=StackNavigator({
MyTeamStand:{
screen:My_Team_Standing_Content
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
