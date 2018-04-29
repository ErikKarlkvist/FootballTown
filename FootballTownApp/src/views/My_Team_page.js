
/**
- Display a picture of the team or just a
- Display a team's name
- View a team's wins/losses/draws/points
- View
- A description of a team
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Colors} from "../config/UIConfig";
import Team_page from "../views/Team_page"




class MyTeam extends Component{
  render() {
    return (
      <Team_page />
    );
  }
 }

  class Players extends Component{
  render() {
    return (
      <View>
        <Text>Players</Text>
      </View>
    );
  }
}




  export default TabNavigator({
    Team: {screen: MyTeam},
    squad: {screen: Players},
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
