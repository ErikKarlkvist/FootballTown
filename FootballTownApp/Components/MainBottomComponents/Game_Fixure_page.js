



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
import {TabNavigator} from 'react-navigation'


class Game_Fixure_page extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Game Fixure  Page!!!
        </Text>
      </View>
    );
  }
}

export default Game_Fixure_page;


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