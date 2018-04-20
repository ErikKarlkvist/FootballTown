
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
  Switch
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import {Colors, Fonts} from "../config/UIConfig"
class ListPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  render() {
      return (
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Switch
            value={this.props.value}
            onValueChange={this.onValueChange}
            onTintColor={Colors.Primary}
            thumbTintColor={Colors.Background}
            tintColor={Colors.Background}
            multiline={true}
          />
        </View>
      );
    }

  onValueChange = (value) => {
    this.props.onValueChange(value)
  }
}

  export default ListPicker;


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      flexDirection:"row",
      justifyContent:"space-between",
      height: 50,
    },
    title: {
      fontSize: 15,
      color: Colors.PrimaryText,
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
