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
import Home_page from '../views/Home_page'
import Event_page from '../views/Event_page'
import My_Team_page from '../views/My_Team_page'
import Near_By_page from '../views/Near_By_page'
import Icon from 'react-native-vector-icons/Ionicons';

import Iconm from 'react-native-vector-icons/MaterialIcons';


  //export default MainScreen;

const AppTabNavigator=TabNavigator({
Home:{
screen:Home_page,
navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    },

},
MyTeam:{
screen:My_Team_page,
navigationOptions: {
      tabBarLabel: 'MyTeam',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-people' : 'ios-people'}
        size={26}
        style={{ color: tintColor }}
      />
    },
},
Event:{
screen:Event_page,
navigationOptions: {
      tabBarLabel: 'Event',
      tabBarIcon: ({ tintColor, focused }) => <Iconm
        name={focused ? 'event' : 'event'}
        size={26}
        style={{ color: tintColor }}
      />
    },
},
NearBy:{
screen:Near_By_page,
navigationOptions: {
      tabBarLabel: 'NearBy',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-map' : 'ios-map-outline'}
        size={26}
        style={{ color: tintColor }}
      />
  },
}
},{
tabBarPosition:'bottom',
 animationEnabled: true,
 swipeEnabled: true,
 tabBarOptions: {
  /*style:{
     ...Platform.select({
            android:{
                BackgroundColor:'white'
                  }
                  })
  },
  */
  labelStyle:{
             fontSize:12,
             padding:0

             },
  activeTintColor: '#000',
  activebackgroundColor:'darkgreen',
  inactiveTintColor: 'black',
  inactiveBackgroundColor:'green',
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
