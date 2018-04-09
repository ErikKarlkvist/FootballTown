
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

import My_Team_News_page from './My_Team_News_page'
import My_Team_Fixure_page from './My_Team_Fixure_page'
import My_Team_Standing_page from './My_Team_Standing_page'

class My_Team_page extends Component{
  render() {
    return (
      <AppTabNavigator_myTeam/>
    );
  }
}

export default My_Team_page;

const AppTabNavigator_myTeam=TabNavigator({
News:{
screen:My_Team_News_page
},
Fixure:{
screen:My_Team_Fixure_page
},
Standing:{
screen:My_Team_Standing_page
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