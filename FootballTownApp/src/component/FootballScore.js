import React, { Component } from 'react';
import {AppRegistry, Text } from 'react-native';

export default class FootballScore extends Component {
  render() {
    return (
    	<FlatList
  			data={[{key: 'a'}, {key: 'b'}]}
  			renderItem={({item}) => <Text>{item.key}</Text>}
		/>
    );
  }
}

AppRegistry.registerComponent('FootballScore', () => FootballScore);