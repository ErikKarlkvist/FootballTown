import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Factory from '../database/Factory';


import { Table, Row, Rows } from 'react-native-table-component';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


export default class Players_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            page: 1,
            errors: null,
            refreshing: false,
        team: Factory.getNewsInstance(),
        fetchedNews: [],
        navigator: props.navigator,
        itemCount: this.props.itemCount,
        };
  
    }
  
    componentDidMount(){
      this.refreshData()
    }
  
    refreshData = () =>{
      this.setState({loading:true})
      this.state.news.getNews(true).then((news) => {
        console.log(news)
        this.setState({loading: false, refreshing: false, fetchedNews: news})
      })
    }
  
    handleRefresh = () => {
      this.setState(
        {
          page: 1,
          refreshing: true
        }
      );
      this.refreshData();
    };
  

    render() {
        const state = this.state;
        return (
            <ScrollView style={styles.viewContainer}>
            <View style={styles.playerContainer}>
                <View style={styles.playerNumberContainer}>
                    <View style={styles.playerNumberCircle}>
                <Text style={styles.playerNumber}>1</Text>
                </View>
                </View>
                <View style={styles.playerInfoContainer}>
                    <Text style={styles.playerName}>Mick Jagger</Text>
                    <Text style={styles.playerPosition}>Right Defense</Text>
                </View>
                <View style={styles.playerImageContainer}>
                    <Image resizeMode="contain" style={styles.playerImage} source={{uri: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p11334.png'}}/>
                </View>
            </View>
    
            <View style={styles.playerContainer}>
                <View style={styles.playerNumberContainer}>
                    <View style={styles.playerNumberCircle}>
                <Text style={styles.playerNumber}>7</Text>
                </View>
                </View>
                <View style={styles.playerInfoContainer}>
                    <Text style={styles.playerName}>Captain America</Text>
                    <Text style={styles.playerPosition}>Mascot</Text>
                </View>
                <View style={styles.playerImageContainer}>
                    <Image resizeMode="contain" style={styles.playerImage} source={{uri: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p11334.png'}}/>
                </View>
            </View>
            </ScrollView>
        )
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
  },
  playerImage: {
      height: undefined,
      width: undefined,
      maxHeight: 56,
      flex: 1,
  },


});
