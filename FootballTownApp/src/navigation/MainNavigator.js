import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import Home from './HomeScreenNavigation'
import Event_page from '../views/Event_page'
import My_Team_page from '../views/My_Team_page'
import Near_By_page from '../views/Near_By_page'
import Feed from './FeedNavigation'
import News_page from '../views/News_page'
import Games_page from '../views/Games_page';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../config/UIConfig'
import Iconm from 'react-native-vector-icons/MaterialIcons';
import AdminAddGame from "../views/AdminAddGame"

  //export default MainScreen;

const AppTabNavigator=TabNavigator({
  Home:{
    screen:Home,
    navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor, focused }) => getIcon(focused, tintColor, 'home', 'ios-home-outline', 'ios-home')
        },

    },
    Feed:{
    screen:Feed,
    navigationOptions: {
          tabBarLabel: 'Feed',
          tabBarIcon: ({ tintColor, focused }) => getIcon(focused, tintColor, 'event', 'ios-paper-outline', 'ios-paper')
        },

    },
    Games:{
      screen:Games_page,
      navigationOptions: {
            tabBarLabel: 'Games',
            tabBarIcon: ({ tintColor, focused }) => getIcon(focused, tintColor, 'format-list-numbered', 'ios-list-outline', 'ios-list')
          },
      },
    Team:{
    screen:My_Team_page,
    navigationOptions: {
          tabBarLabel: 'Team',
          tabBarIcon: ({ tintColor, focused }) => getIcon(focused, tintColor, 'person', 'ios-person-outline', 'ios-person')
        },
    },
    NearBy:{
    screen:Near_By_page,
    navigationOptions: {
          tabBarLabel: 'Near',
          tabBarIcon: ({ tintColor, focused }) => getIcon(focused, tintColor, 'place', 'ios-pin-outline', 'ios-pin')
      },
}
},{
tabBarPosition:'bottom',
 animationEnabled: true,
 swipeEnabled: true,
 tabBarOptions: {
 style: {
  backgroundColor: '#FFFFFF',
  marginBottom: Platform.select({ ios: 0, android: -10, }),
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
  showIndicator:false,
  }
})

export default AppTabNavigator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

function getIcon(focused, tintColor, android, iOS, iOSH){
  return Platform.select({
    ios: <Icon
        name={focused ? iOSH : iOS }
        size={28}
        style={{ color: tintColor }}
      />,
    android: <Iconm
        name={ android }
        size={28}
        style={{ color: tintColor }}
      />,
  })
}
