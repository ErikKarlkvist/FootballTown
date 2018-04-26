
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
        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Admin")}}>
          <Icon name={"add"} color={"white"} size={20}/>
        </TouchableOpacity>
      </View>
    );
  }

}

export default AdminHeaderButton;


const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  optionsContainer: {
    width,
    height,
    position: "absolute",
    top: 0,
    left: 0,
    right: width,
    bottom: 0,
    backgroundColor: "black",
    zIndex: 1000
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
