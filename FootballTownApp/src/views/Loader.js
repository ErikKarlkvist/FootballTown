import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';

class Loader extends Component{

  render() {
      return (
        <View
        style={{flex: 1, justifyContent: 'center', alignItems:'center',}}
      >
        <ActivityIndicator size="large" color={Colors.Primary}/>
      </View>
      );
    }
  }
export default Loader;
