


import React, {Component} from 'react';
import Matches_page from '../views/Matches_page'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

class Coming_MatchesComp extends Component{
  render() {
    return (
   <Matches_page/>


    );
  }
}
export default Coming_MatchesComp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

