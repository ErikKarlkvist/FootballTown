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
import Feed_page from '../views/Feed_page'
import News_page from '../views/News_page'
import Games_page from '../views/Games_page';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../config/UIConfig'
import Iconm from 'react-native-vector-icons/MaterialIcons';


  //export default MainScreen;

const AppTabNavigator=TabNavigator({
Home:{
screen:Home_page,
navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={32}
        style={{ color: tintColor }}
      />,
    },

},
Feed:{
screen:Feed_page,
navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-clipboard' : 'ios-clipboard-outline'}
        size={32}
        style={{ color: tintColor }}
      />
    },

},
Games:{
  screen:Games_page,
  navigationOptions: {
        tabBarLabel: 'Games',
        tabBarIcon: ({ tintColor, focused }) => <Icon
          name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size={32}
          style={{ color: tintColor }}
        />
      },
  },
Team:{
screen:My_Team_page,
navigationOptions: {
      tabBarLabel: 'Team',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-people' : 'ios-people-outline'}
        size={32}
        style={{ color: tintColor, }}
      />
    },
},
NearBy:{
screen:Near_By_page,
navigationOptions: {
      tabBarLabel: 'Near',
      tabBarIcon: ({ tintColor, focused }) => <Icon
        name={focused ? 'ios-map' : 'ios-map-outline'}
        size={32}
        style={{ color: tintColor }}
      />
  },
}
},{
tabBarPosition:'bottom',
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
