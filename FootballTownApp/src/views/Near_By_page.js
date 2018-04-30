
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
import Ionicons from "react-native-vector-icons/Ionicons";
//MaterialIcons'
import {TabNavigator} from 'react-navigation';

class Near_By_page extends Component{
  render() {
      return (
        <View style={styles.container}>
        <Text>Welcome to maps, budds</Text>
        </View>
      );
    }
  }

  export default Near_By_page;


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
