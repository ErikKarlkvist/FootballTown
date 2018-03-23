import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Hello World! </Text>
      <Text></Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24cdda',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
