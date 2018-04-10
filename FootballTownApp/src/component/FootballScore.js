import React, { Component } from 'react';
import {AppRegistry, Text } from 'react-native';

export default class FootballScore extends Component {
  render() {
    return (
      <Text>Hello {this.name}!</Text>
    );
  }
}

AppRegistry.registerComponent('FootballScore', () => FootballScore);