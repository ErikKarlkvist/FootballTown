import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Alert
} from 'react-native';

import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Button from "../component/Button"
import Factory from "../database/Factory"

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const screenWidth = dimensions.width;

class Game_Details_page extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: Factory.getUserInstance(),
      games: Factory.getGamesInstance(),
      gamesStory: props.navigation.state.params.game
    }
  }

  longToDate(millisec) {
    return (new Date(millisec).toUTCString());
  }

  initDelete = () => {
    Alert.alert(
      "You are about to delete the article",
      "Are you sure you want to proceed?",
      [
        {text:"Cancel", onPress: () => {}},
        {text:"Yes, delete it", onPress: this.delete}
      ]
    )
  }

  delete = () => {
    this.state.games.removeGame(this.state.gamesStory.id)
    this.props.navigation.goBack()
  }

  edit = () => {
    this.props.navigation.navigate("AdminAddGame", {gamesStory: this.state.gamesStory, refresh: this.refresh})
  }

  refresh = (gamesStory) => {
    console.log(gamesStory)
    this.setState({gamesStory})
  }

  render() {
      const game = this.state.gamesStory
      return (
        <ScrollView style={GlobalStyles.articleScrollView}>
          <View style={styles.summary}>
            <View style={styles.teamIcon}>
              <Image style={styles.image} source={{uri: game.team1Flag}}/>
              <Text style={styles.teamName}>{game.team1}</Text>
            </View>
            <View style={styles.result}>
              <Text style={styles.resultText}>{game.goals1} - {game.goals2}</Text>
              <Text style={styles.statusText}>{game.status}</Text>
            </View>
            <View style={styles.teamIcon}>
              <Image style={styles.image} source={{uri: game.team2Flag}}/>
              <Text style={styles.teamName}>{game.team2}</Text>
            </View>
          </View>

          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.subtitle}>Details</Text>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="map-marker" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>{game.location}</Text>
            </View>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="calendar" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>{this.longToDate(game.date)}</Text>
            </View>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="flag" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>{game.referee}</Text>
            </View>

            <Text style={GlobalStyles.text}>{game.text}</Text>
          </View>

          {this.state.user.getIsAdmin() && <View style={{flexDirection: "row", margin: 20}}>
            <Button buttonStyle={{flex: 1, backgroundColor:Colors.Primary, marginRight: 10}} title={"Edit"} onPress={this.edit}/>
            <Button buttonStyle={{flex: 1, backgroundColor:Colors.Warning, marginLeft: 10}} title={"Delete"} onPress={this.initDelete}/>
          </View>}

        </ScrollView>
      );
    }
  }

  export default Game_Details_page;

  const styles = StyleSheet.create({
    result: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#474747',
      height: 100,
      borderRadius: 5,
      marginTop: 50
    },
    summary: {
      backgroundColor: '#a8a8a8',
      flex: 0.3,
      flexDirection: 'row',
      height: 200,
      justifyContent: 'center',
      display: 'flex',

    },
    teamIcon: {
      alignItems: 'center',
      marginTop: 40,
      flex: 0.3
    },
    resultText: {
      fontSize: 35,
      fontFamily: Fonts.Default,
      color: Colors.PrimaryDarkText,
      fontWeight: '400',
    },
    statusText: {
      fontSize: 12,
      fontFamily: Fonts.Default,
      color: Colors.PrimaryDarkText,
      fontWeight: '400',
    },
    teamName: {
      fontSize: 15,
      fontFamily: Fonts.Default,
      color: Colors.PrimaryLightText,
      marginTop: 10,
      textAlign: 'center',
    },
    additionalInfoText: {
      fontSize: 15,
      color: 'grey',
      fontFamily: Fonts.Body,
      margin: 3,
    },
    additionalInfoView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    image: {
      height: 75,
      width: 75,
      resizeMode: 'contain',
    },
  });
