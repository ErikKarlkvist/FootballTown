
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
  Image,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Colors} from "../config/UIConfig";
import Team_page from "../views/Team_page";
import PickTeam from "../views/PickTeam";
import Players_page from "../views/Players_page";
import Factory from "../database/Factory";


export default class Checker extends Component {
  constructor(){
    super()
    this.state = {
      hasSelectedTeam: false
    }
  }

  componentDidMount(){
    Factory.getUserInstance().getFollowingTeam().then((team) => {
      console.log(team)
      let hasSelectedTeam = false
      if(team && team.id){
        console.log("team exists")
        hasSelectedTeam = true
      }
      this.setState({hasSelectedTeam})
    })
  }

  render() {
  if(this.state.hasSelectedTeam){
    return <NavBar reload={this.state.hasSelectedTeam}/>
  }else{
    return(
      <PickTeam setHasSelected={this.setHasSelected}/>
    )
    } 
  }

  setHasSelected = (hasSelectedTeam) => {
    this.setState({hasSelectedTeam})
  }
}


const NavBar = TabNavigator({
    Team: {screen: Team_page},
    Players: {screen: Players_page},
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
