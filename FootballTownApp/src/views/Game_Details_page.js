import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import {Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const screenWidth = dimensions.width;

class Game_Details_page extends Component{

  constructor(props){
    super(props);
  }

  render() {
      return (
        <ScrollView>
          <View style={styles.summary}>
            <View style={styles.teamIcon}>
              <Thumbnail large source ={require('./ball.jpg')}/>
              <Text style={styles.teamName}>{this.props.game.team1}</Text>
            </View>
            <View style={styles.result}>
              <Text style={styles.resultText}>{this.props.game.goals1} - {this.props.game.goals2}</Text>
              <Text style={styles.statusText}>{this.props.game.status}</Text>
            </View>
            <View style={styles.teamIcon}>
              <Thumbnail large source ={require('./ball.jpg')}/>
              <Text style={styles.teamName}>{this.props.game.team2}</Text>
            </View>
          </View>



          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.subtitle}>Details</Text>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="map-marker" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>this.props.game.location</Text>
            </View>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="calendar" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>{this.props.game.date}</Text>
            </View>

            <View style={styles.additionalInfoView}>
              <Icon color="grey" name="flag" size={25} style={styles.icon}/>
              <Text style={styles.additionalInfoText}>{this.props.game.referee}</Text>
            </View>

            <Text style={GlobalStyles.text}>{this.props.game.text}</Text>
          </View>

        </ScrollView>
      );
    }
  }

  export default Game_Details_page;

  const styles = StyleSheet.create({
    result: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#474747',
      height: 100,
      borderRadius: 5,
    },
    summary: {
      backgroundColor: '#a8a8a8',
      flex: 0.3,
      flexDirection: 'row',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    teamIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 30,
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
    }
  });
