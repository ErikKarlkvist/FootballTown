import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, image} from 'react-native';

export default class MatchComponent extends Component{
render(){
  return(
    <View style={styles.container}>
     <View style={{flex: 1, flexDirection: 'row'}}>

    <Text style={styles.teams}> {this.props.team1}</Text>
    <Text style={styles.teams}>{this.props.score1}</Text>
    <Text style={styles.teams}>{this.props.score2}</Text>
    <Text style={styles.teams}> {this.props.team2}</Text>
    </View>
    </View>
  );
}

};

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FF8C00',

  height: 60,

  },
  teams:{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
  },
});

AppRegistry.registerComponent('MatchComponent', () => MatchComponent);
