
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
  Image
} from 'react-native';
import {TabNavigator} from 'react-navigation'


class Home_page extends Component{
  render() {
    return (
      <View style={styles.container}>

        <Image source ={require('./bal1of1.jpg')}
                       style={{width:450,height:500,flex:1}}/ >

         <Text style={styles.TextProp}>
              Follow Football on our App!!!
            </Text>


      </View>
    );
  }
}

export default Home_page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextProp: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
       },
});
