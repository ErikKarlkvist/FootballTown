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
    <NewsComponent height="50%"/>
  );
  }
}
class NewsStory extends Component {
  render() {
    return(
    <View>
    return <Text>NewsStoryScreen</Text>
    </View>
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



// Stack navigator for the News stack 
const NewsStack = StackNavigator({
  NewsFeed: { screen: NewsFeed },
  Details: { screen: NewsStory },
});
const EventStack = StackNavigator({
  Events: { screen: EventsFeed },
  Details: { screen: EventScreen },
});
export default TabNavigator(
{
  News: {screen: NewsStack},
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