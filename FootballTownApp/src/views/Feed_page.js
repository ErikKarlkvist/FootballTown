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
import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'

class NewsFeed extends Component{
  render() {
  return (
    <NewsComponent />
  );
  }
}
class EventsFeed extends Component {
  render() {
    return(
    <View>
      <Text>Events Screen</Text>
      <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View> 
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




const EventStack = StackNavigator({
  Events: { screen: EventsFeed },
  Details: { screen: EventScreen },
});
export default TabNavigator(
{
  News: {screen: NewsFeed},
  Events: {screen: EventStack},

},{});


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