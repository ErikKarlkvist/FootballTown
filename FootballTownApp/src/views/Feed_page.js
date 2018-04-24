   import React, { Component } from 'react';
   import { TabNavigator, StackNavigator } from 'react-navigation';
   import {
     Platform,
     StyleSheet,
     Text,
     View,
     Button,
   } from 'react-native';
   //import MatchComponent from '../component/MatchComponent';
   import RanksComponent from'../component/RanksComponent';
   import Coming_MatchesComp from'../component/Coming_MatchesComp';
   import Icon from 'react-native-vector-icons/Ionicons'
   import {Colors} from "../config/UIConfig"
   //MaterialIcons'
   
   class NewsFeed extends Component{
    render() {
      return (
        <NewsComponent />
      );
    }
   }
   class EventsFeed extends Component {
    render() {
      return(
        <EventComponent />
      );
    }
   }
   
   export default TabNavigator(
  {
    News: {screen: NewsFeed},
    Events: {screen: EventsFeed},
  },{
   animationEnabled: true,
   swipeEnabled: true,
   tabBarOptions: {
   style: {
    backgroundColor: Colors.Primary,
    marginBottom: Platform.select({ ios: 0, android: -10, }),
  },
    labelStyle:{
      fontWeight: 'bold',
    },
    activeTintColor: Colors.PrimaryDarkText,
    inactiveTintColor: Colors.PrimaryDarkText2,
    }
  });
   