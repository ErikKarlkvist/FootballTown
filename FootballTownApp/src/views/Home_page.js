
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
  Image,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator,withNavigation} from 'react-navigation';
import FootballScore from "../component/FootballScore"
import {NewsComponent} from "../component/NewsComponent"
import Factory from "../database/Factory"
import AdminHeaderButton from "../component/AdminHeaderButton"
import {Colors} from "../config/UIConfig";

import UpComing_Matches_page from "../views/UpComing_Matches_page";
import Latest_Matches_page from "../views/Latest_Matches_page";
import Ranks_page from "../views/Ranks_page";
class Home_page extends Component{

  static navigationOptions = ({ navigation }) => ({
    title: 'Footcity',
    headerLeft: (<Image resizeMode="contain" style={styles.logo} source={require('../resources/footcity-icon.png')} />),
    headerTitle: "Footcity",
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
             <NewsComponent title="Recent News" itemCount={3} navigation={this.props.navigation} loadMessage={"MORE"}/>
          </View>

          <UpComing_Matches_page itemCount={3} navigation={this.props.navigation} loadMessage={"MORE"} title={"Upcoming matches"}/>


          <Latest_Matches_page itemCount={3} navigation={this.props.navigation} loadMessage={"MORE"} title={"Latest matches"}/>

          <Text style={styles.headerTitle}>Table</Text>
          <Ranks_page itemCount={5} navigation={this.props.navigation} loadMessage={"MORE"}/>

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



  export default withNavigation(Home_page);


  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.Background,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    headerTitle: {
      marginTop: 20,
      marginLeft: 10,
      fontSize: 20,
      marginBottom: 10,
      color: Colors.PrimaryText
    },
    logo: {
      height: 28,
      width: 28,
      marginLeft: 16,
    },

  });
