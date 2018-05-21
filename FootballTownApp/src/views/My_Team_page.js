
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
  ActivityIndicator
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
      hasSelectedTeam: false,
      hasLoaded: false
    }
  }

  componentDidMount(){
    Factory.getUserInstance().getFollowingTeam().then((team) => {
      console.log(team)
      let hasSelectedTeam = false
      if(team && team.name){
        console.log("team exists")
        hasSelectedTeam = true
      }
      this.setState({hasSelectedTeam, hasLoaded: true})
    })
  }

  render() {
    if(this.state.hasSelectedTeam){
      return <NavBar setHasSelected={this.setHasSelected} reload={this.state.hasSelectedTeam}/>
    }else if(this.state.hasLoaded){
      return(
        <PickTeam setHasSelected={this.setHasSelected}/>
      )
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PrimaryDark}/>
        </View>
      )
    }
}

  setHasSelected = (hasSelectedTeam) => {
    this.setState({hasSelectedTeam})
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
});

const NavBar = TabNavigator({
    Team: { screen: Team_page },
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
