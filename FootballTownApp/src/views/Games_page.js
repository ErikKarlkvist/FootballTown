

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
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Matches_page from '../views/Matches_page';
import Ranks_page from '../views/Ranks_page';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../config/UIConfig'
import Iconm from 'react-native-vector-icons/MaterialIcons';


  //export default MainScreen;

const AppTabNavigator=TabNavigator({
Matches:{
screen:Matches_page,
},
Ranks:{
screen:Ranks_page,
},
},{
//tabBarPosition:'bottom',
 animationEnabled: true,
 swipeEnabled: true,
 tabBarOptions: {
 style: {
  backgroundColor: '#FFFFFF'
},
indicatorStyle: {
  backgroundColor: '#FFFFFF',
  },
  labelStyle:{
             fontSize:10,
             padding:0

             },
  activeTintColor: Colors.Primary,
  activebackgroundColor:'#FFFFFF',
  inactiveTintColor: 'black',
  inactiveBackgroundColor:'#FFFFFF',
  showIcon:true,
  showLabel:true,
  }
})

export default AppTabNavigator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 4,
  },

});
