import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import NewsComponent from '../component/NewsComponent'
import EventComponent from '../component/EventComponent'
import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'

class NewsFeed extends Component{
  render() {
  return (
    <NewsComponent />
  );
  }
}
class EventsFeed extends Component{
  render() {
  return (
    <EventComponent />
  );
  }
}
class EventScreen extends Component {
  render() {
    return(
    <View>
    <Text> Event screen </Text>
    </View>
    );
  }
}



export default TabNavigator(
{
  News: {screen: NewsFeed},
  Events: {screen: EventsFeed},
});


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

  });
