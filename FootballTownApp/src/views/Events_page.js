import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
//MaterialIcons'
import {TabNavigator,withNavigation} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';
import {openPositionInMapView} from '../navigation/MainNavigator'
import Factory from "../database/Factory"
import Button from "../component/Button"

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


class Events_page extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: Factory.getUserInstance(),
      events: Factory.getEventsInstance(),
      eventsStory: props.eventsStory
    }
  }

  render() {
      return (
        <ScrollView style={GlobalStyles.articleScrollView}>
          <Image
            style={{width: screenWidth, height: imageHeight}}
            source={{uri: this.state.eventsStory.imageUrl}}
          />
          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.title}>{this.state.eventsStory.title}</Text>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NearBy')}
              >
            <Text style={GlobalStyles.text}><Icon name='map-marker' size={15} style={{ marginLeft:'3%', padding: 10, color: "black" }}/> Location: {this.state.eventsStory.location.name}</Text>
            </TouchableOpacity>
            <Text style={GlobalStyles.text}><Ionicons name='md-pricetags' size={13} style={{ marginLeft:'3%', padding: 10, color: "black" }}/> Price: {this.state.eventsStory.price}</Text>
            <Text style={GlobalStyles.text}>{this.state.eventsStory.text}</Text>
          </View>
          {this.state.user.getIsAdmin() && <View style={{flexDirection: "row", margin: 20}}>
            <Button buttonStyle={{flex: 1, backgroundColor:Colors.Primary, marginRight: 10}} title={"Edit"} onPress={this.edit}/>
            <Button buttonStyle={{flex: 1, backgroundColor:Colors.Warning, marginLeft: 10}} title={"Delete"} onPress={this.initDelete}/>
          </View>}
        </ScrollView>
      );
    }

    // Opens the given event in the Map tab.
    openEventInMap(event) {
      this.props.navigation.navigate('NearBy',{event: event});
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
      this.state.events.removeEvents(this.state.eventsStory.id)
      this.props.navigation.state.params.refresh()
      this.props.navigation.goBack()
    }

    edit = () => {
      this.props.navigation.navigate("AdminAddEvents", {eventsStory: this.state.eventsStory, refresh: this.refresh})
    }

    refresh = (eventsStory) => {
      this.props.navigation.state.params.refresh()
      this.setState({eventsStory})
    }

  }

    export default withNavigation(Events_page);
