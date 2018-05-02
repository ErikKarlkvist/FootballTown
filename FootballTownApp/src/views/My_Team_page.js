
/**
- Display a picture of the team or just a their logo
- Display a team's name
- View a team's wins/losses/draws/points
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
import Team_page from "../views/Team_page";
import PickTeam from "../views/PickTeam";





class MyTeam extends Component{
  render() {
  //  if(false){
    return (
      <Team_page />
    );
/*  }else{
    return(
      <PickTeam/>
    )
  } */
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
    Players: {screen: Players},
  },{
   animationEnabled: true,
   swipeEnabled: true,
    tabBarPosition:'top',
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
