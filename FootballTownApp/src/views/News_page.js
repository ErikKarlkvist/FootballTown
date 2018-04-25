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
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';





  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const screenWidth = dimensions.width;


class News_page extends Component{

  constructor(props){
    super(props);
  }

  render() {
      return (
        <ScrollView>
          <Image
            style={{width: screenWidth, height: imageHeight}}
            source={{uri: this.props.newsStory.imageUrl}}
          />
          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.title}>{this.props.newsStory.title}</Text>
            <Text style={GlobalStyles.ingress}>{this.props.newsStory.ingress}</Text>
            <Text style={GlobalStyles.text}>{this.props.newsStory.text}</Text>
          </View>
        </ScrollView>
      );
    }
  }

  export default News_page;
