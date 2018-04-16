
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
  View,
  ScrollView
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import FootballScore from "../component/FootballScore"
import NewsComponent from "../component/NewsComponent"

class Home_page extends Component{
  render() {
      return (
        <ScrollView>
          <View style={styles.container}>
            <FootballScore />
            <NewsComponent />
          </View>
        </ScrollView>
      );
    }
  }

  export default Home_page;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginTop: 30
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

  });
