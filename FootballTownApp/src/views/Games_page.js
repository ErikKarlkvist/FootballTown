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
//MaterialIcons'

class GameMatches extends Component{
  render() {
  return (
    <Coming_MatchesComp />
  );
  }
}
class GameRanks extends Component {
  render() {
    return(
    <RanksComponent/>
      );
  }
}

export default TabNavigator(
{
  Matches: {screen: GameMatches},
  Ranks: {screen: GameRanks},

},{});


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