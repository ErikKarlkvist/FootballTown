


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
import {
Container,
Content,
Icon
} from 'native-base'
import {
StackNavigator
}from 'react-navigation'
import My_Team_News_Content from './My_Team_News_Content'
class My_Team_News_page extends Component{

  render() {
         return (
    <AppStackNavigator_News_content/>

    );
  }
}

const AppStackNavigator_News_content=StackNavigator({
        News:{
        screen:My_Team_News_Content

        }

})

export default My_Team_News_page;

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
