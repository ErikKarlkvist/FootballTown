import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import {Colors} from '../config/UIConfig'

export default class MatchComponent extends Component{
render(){
  return(
    <View style={styles.container}>
    <View style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>


    <Image
          style={{width: 30, height: 30}}
          source={{uri: this.props.team1Flag}}
        />
    <Text style={styles.teams}> {this.props.team1}</Text>
    <Text style={styles.scores}>{this.props.score1}</Text>
    <Text> - </Text>
    <Text style={styles.scores}>{this.props.score2}</Text>
    <Text style={styles.teams}> {this.props.team2}</Text>

    <Image
            source={{
              uri: this.props.team2Flag,
            }}
            style={{width: 30, height:30}}
          />
    </View>
    </View>
  );
}

};

const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.Primary,
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
  paddingLeft: 10,
  paddingRight: 10
  },
  scores:{
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold',
  alignItems: 'center'
  }
});

AppRegistry.registerComponent('MatchComponent', () => MatchComponent);
