
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
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import {Colors, Fonts} from "../config/UIConfig"
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StackNavigator } from 'react-navigation';
class AdminHeaderButton extends Component{
  constructor(props){
    super(props);
    this.state = {displayOptions: false}
    console.log(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {this.setState({displayOptions: true})}}>
          <Icon name={"more-vert"} size={20}/>
        </TouchableOpacity>
        {this.state.displayOptions && this.renderOptions()}
      </View>
    );
  }

  renderOptions(){
    return (
      <TouchableOpacity onPress={() => {this.setState({displayOptions: false})}} style ={styles.optionsContainer}>
        <View style={styles.optionPanel}>
          <Text style={styles.optionsTitle}>Admin Panel</Text>
          <View style={styles.underline}/>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddGame")}>
            <Text style={styles.optionsText}>Create Game</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate("AdminAddNews")}}>
            <Text style={styles.optionsText}>Create News Article</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate("AdminAddEvents")}}>
            <Text style={styles.optionsText}>Create Event</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }


}

export default AdminHeaderButton;


const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20
  },
  optionsContainer: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: -width + 20,
  },
  optionPanel: {
    height: 200,
    width: 150,
    position: "absolute",
    top: 22,
    right: 10,
  },
  underline: {
    borderBottomWidth: 1,
    borderColor: Colors.PrimaryText
  },
  optionsText: {
    marginLeft: 10,
    marginTop: 15,
    color: Colors.Link,
    fontFamily: Fonts.Title
  },
  optionsTitle: {
    marginLeft: 10,
    marginTop: 10,
    color: Colors.PrimaryText,
    fontFamily: Fonts.Title,
    fontWeight: "800"
  },


});
