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

import Game_News_page from './Game_News_page'
import Game_Fixure_page from './Game_Fixure_page'
import Game_Standing_page from './Game_Standing_page'
import Game_Live_page from './Game_Live_page'
class Event_page extends Component{
  render() {
    return (
     <AppTabNavigator_Game/>
    );
  }
}

export default Event_page;

const AppTabNavigator_Game=TabNavigator({
News:{
  screen:Game_News_page
  },
Fixure:{
screen:Game_Fixure_page
},
Standing:{
screen:Game_Standing_page
},
Live:{
screen:Game_Live_page
}
},{
//tabBarPosition:'bottom',
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