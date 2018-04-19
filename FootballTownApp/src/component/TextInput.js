
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
  ScrollView
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import {Colors, Fonts} from "../config/UIConfig"
class CustomTextInput extends Component{
  constructor(props){
    super(props);

  }



  render() {
      return (
        <ScrollView>
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <TextInput
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            style={[styles.input, this.props.inputStyle]}
            underlineColorAndroid={Colors.ListBackground}
            multiline={true}
          />
          <View style={styles.underline}/>
        </View>
        </ScrollView>
      );
    }
  }

  export default CustomTextInput;


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: Colors.ListBackground,
    },
    title: {
      fontSize: 12,
      color: Colors.Primary,
      fontFamily: Fonts.Body
    },
    input: {
      height: 30,
      color: Colors.PrimaryText,
    },
    underline: {
      borderBottomWidth: 1,
      borderColor: Colors.PrimaryText
    }

  });
