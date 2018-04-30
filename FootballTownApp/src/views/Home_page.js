
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import FootballScore from "../component/FootballScore"
import {NewsComponent} from "../component/NewsComponent"
import Factory from "../database/Factory"
import AdminHeaderButton from "../component/AdminHeaderButton"
import {Colors} from "../config/UIConfig"

class Home_page extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: 'FootCity',
    headerTitle: "FootCity",
    headerRight: (
      <AdminHeaderButton navigation={navigation}/>
    ),
  })

  constructor(){
    super()
    Factory.getGamesInstance().getGames().then((events) => {
      console.log(events)
    })
    
  }

  render() {
      return (
        <ScrollView>
          <StatusBar
           backgroundColor={Colors.PrimaryDark}
           barStyle="light-content"
          />
          <View style={styles.container}>
             <NewsComponent title="Recent News" itemCount={3} navigation={this.props.navigation}/>
          </View>
        </ScrollView>
      );
    }

  createMockNews(){
    const newsObject = {
      imageUrl: "https://images.pexels.com/photos/589823/pexels-photo-589823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Developer of footballtown blackmailed",
      ingress: "Oh no! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    }
    const news = Factory.getNewsInstance()
    news.addNews(newsObject)
  }

  createMockEvents(){
    const eventsObject = {
      imageUrl: "https://images.pexels.com/photos/589823/pexels-photo-589823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Buy hotdogs",
      teams:["YD2GnG9JeiYs8L0lzEdw", "yZBCrgg9C9NQ13mvfMyV"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
    }
    const events = Factory.getEventsInstance()
    events.addEvents(eventsObject)
  }

  createMockGame(){
    const gameObject = {
      team1Uid: "YD2GnG9JeiYs8L0lzEdw",
      team2Uid: "yZBCrgg9C9NQ13mvfMyV",
      goals1: 2,
      goals2: 1,
      status: "Pending",
      date: new Date().getTime()
    }
    const games = Factory.getGamesInstance()
    games.addGame(gameObject)
  }
}



  export default Home_page;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.Background,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

  });
