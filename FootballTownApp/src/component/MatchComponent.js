import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';

export default class MatchComponent extends Component{
render(){
  return(
    <View style={styles.container}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>
    <Image
            source={{
              uri: 'http://icons.iconarchive.com/icons/martin-berube/sport/64/Soccer-icon.png',
            }}
            style={{width: 25, height:25}}
          />
    <Text style={styles.teams}> {this.props.team1}</Text>
    <Text style={styles.scores}>{this.props.score1}</Text>
    <Text style={styles.scores}>{this.props.score2}</Text>
    <Text style={styles.teams}> {this.props.team2}</Text>
    </View>
    </View>
  );
}

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8C00',
    padding: 10,
    height: 60,
    marginTop: 10, 
  },
  teams:{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
  },
  scores:{
  color: 'black',
  fontSize: 15,
  }
});

AppRegistry.registerComponent('MatchComponent', () => MatchComponent);
