import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
//MaterialIcons'
import {TabNavigator,withNavigation} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';
import {openPositionInMapView} from '../navigation/MainNavigator'



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
          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.title}>{this.props.eventsStory.title}</Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NearBy')}
              >
            <Text style={GlobalStyles.text}><Icon name='map-marker' size={15} style={{ marginLeft:'3%', padding: 10, color: "black" }}/> Location: {this.props.eventsStory.location.name}</Text>
            </TouchableOpacity>
            <Text style={GlobalStyles.text}><Ionicons name='md-pricetags' size={13} style={{ marginLeft:'3%', padding: 10, color: "black" }}/> Price: {this.props.eventsStory.price}</Text>
            <Text style={GlobalStyles.text}>{this.props.eventsStory.text}</Text>
          </View>
        </ScrollView>
      );
    }

    // Opens the given event in the Map tab. 
    openEventInMap(event) {
      this.props.navigation.navigate('NearBy',{event: event});
    }

  }

    export default withNavigation(Events_page);
