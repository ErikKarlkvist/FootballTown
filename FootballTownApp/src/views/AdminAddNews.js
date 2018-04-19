
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
  Button,
  ScrollView
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import TextInput from "../component/TextInput"
import {Colors, Fonts} from "../config/UIConfig"
class AdminAddNews extends Component{
  constructor(props){
    super(props);
    this.state = {
      news: Factory.getNewsInstance(),
      imageUrl: "",
      title: ""
    }
  }

  render() {
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Image URL"} value={this.state.imageUrl} onChangeText={(text) => {this.setState({imageUrl: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Article Title"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 80}} title={"Article Summary"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Article Body"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>
          <Button title={"Save"} onPress = {() => {}}/>
        </View>
        </ScrollView>
      );
    }
  }

  export default AdminAddNews;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
      paddingTop: 50,
      marginBottom: 200
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

  });
