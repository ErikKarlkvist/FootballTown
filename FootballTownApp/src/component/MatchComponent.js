import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';

export default class MatchComponent extends Component{
render(){
  return(
    <View style={styles.container}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>


    <Image
            source={{
              uri: this.props.team1Image,
            }}
            style={{width: 25, height:25}}
          />
    <Text style={styles.teams}> {this.props.team1}</Text>
    <Text style={styles.scores}>{this.props.score1}</Text>
    <Text> - </Text>
    <Text style={styles.scores}>{this.props.score2}</Text>
    <Text style={styles.teams}> {this.props.team2}</Text>

    <Image
            source={{
              uri: this.props.team2Image,
            }}
            style={{width: 25, height:25}}
          />
    </View>
    </View>
  );
}

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4CAF50',
    padding: 10,
    height: 60,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },
  teams:{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
  alignItems: 'center',
  paddingLeft: '5%',
  paddingRight: '5%'
  },
  scores:{
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold',
  alignItems: 'center'
  }
});

AppRegistry.registerComponent('MatchComponent', () => MatchComponent);
