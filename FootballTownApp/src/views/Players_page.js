import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Factory from '../database/Factory';
import Loader from '../views/Loader';


import { Table, Row, Rows } from 'react-native-table-component';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


export default class Players_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          errors: null,
          refreshing: false,
          user: Factory.getUserInstance(),
          fetchedTeam: {},
          players: []

        };
      }
    
    componentDidMount(){
        this.setState({loading: true})
        this.state.user.getFollowingTeam().then((team) => {
          this.setState({
            loading: false,
            fetchedTeam: team,
            players: team.players
          })
        })
    }

    render() {
      const state = this.state;
      if(this.state.loading){
        return (
          <Loader/>
        );
      } else {
        return (
            <ScrollView style={styles.viewContainer}>
            <FlatList
            data={this.state.players}
            renderItem={({ item }) => (
                <PlayerItem player = {item}/>
            )}
            keyExtractor={item => item.id}
          />
            </ScrollView>
        );
      }
    }
}      
    

class PlayerItem extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
        <View style={styles.playerContainer}>
            <View style={styles.playerNumberContainer}>
                <View style={styles.playerNumberCircle}>
            <Text style={styles.playerNumber}>{this.props.player.squadNumber}</Text>
            </View>
            </View>
            <View style={styles.playerInfoContainer}>
                <Text style={styles.playerName}>{this.props.player.firstName} {this.props.player.lastName}</Text>
                <Text style={styles.playerPosition}>{this.props.player.position}</Text>
            </View>
            <View style={styles.playerImageContainer}>
                <Image resizeMode="contain" style={styles.playerImage} source={{uri: this.props.player.imageURL}}/>
            </View>
        </View>
    );
  }
}

 
const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: 16,
  },
  playerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.CardBackground,
  },
  playerNumberContainer: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerNumberCircle: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: Colors.PrimaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerNumber: {
      fontWeight: 'bold'
  },
  playerInfoContainer: {
    flex: 4,
    paddingLeft: 0,
    padding: 8,
    borderBottomColor: Colors.PrimaryLight,
    borderBottomWidth: 1,
  },
  playerName: {
    fontWeight: 'bold',
    color: Colors.PrimaryText,
    fontSize: 16,
  },
  playerImageContainer: {
    flex: 1,
    padding: 8,
    borderBottomColor: Colors.PrimaryLight,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  playerImage: {
      height: undefined,
      width: undefined,
      maxHeight: 56,
      flex: 1,
  },


});
