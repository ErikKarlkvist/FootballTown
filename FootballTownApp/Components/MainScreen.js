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

import {TabNavigator} from 'react-navigation';
import Home_page from './MainBottomComponents/Home_page'
import Event_page from './MainBottomComponents/Event_page'
import My_Team_page from './MainBottomComponents/My_Team_page'
import Near_By_page from './MainBottomComponents/Near_By_page'
class MainScreen extends Component{
  render() {
    return (
     <AppTabNavigator/>
    );
  }
}
export default MainScreen;
const AppTabNavigator=TabNavigator({
Home:{
screen:Home_page
},
MyTeam:{
screen:My_Team_page
},
Event:{
screen:Event_page
},
NearBy:{
screen:Near_By_page
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
