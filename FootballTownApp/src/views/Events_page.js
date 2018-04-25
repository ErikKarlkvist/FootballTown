import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Icon
} from 'react-native';
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';




const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


class Events_page extends Component{

  constructor(props){
    super(props);
  }

  render() {
      return (
        <ScrollView>
          <Image
            style={{width: screenWidth, height: imageHeight}}
            source={{uri: this.props.eventsStory.imageUrl}}
          />
            <Text style={GlobalStyles.text}>{this.props.eventsStory.title}</Text>
            <Text style={GlobalStyles.text}>{this.props.eventsStory.text}</Text>
            <Text style={GlobalStyles.text}>Location: {this.props.eventsStory.location}</Text>
            <Text style={GlobalStyles.text}>Price: {this.props.eventsStory.price}</Text>

          </View>
        </ScrollView>
      );
    }
  }

    export default Events_page;
