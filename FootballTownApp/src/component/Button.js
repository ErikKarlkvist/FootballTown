
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
  TouchableOpacity
} from 'react-native';
import {Colors, Fonts} from "../config/UIConfig"
class Button extends Component{
  render() {
      return (
        <TouchableOpacity style={[styles.container, this.props.buttonStyle]} onPress={this.props.onPress}>
          <Text style={[styles.title, styles.titleStyle]}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      );
    }
}

export default Button;


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent:"center",
      alignItems:"center",
      height: 50,
    },
    title: {
      fontSize: 14,
      fontFamily: Fonts.Default,
      color: "white",
      textAlign:"center"
    }
  });
