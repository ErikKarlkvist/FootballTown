import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import firebase from 'react-native-firebase'

export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {counter: 0}
  }

  _incrementCount = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1}));
  }

  render() {
      return (
          <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('./src/img/BuyCycle.png')}
              />

              <Button
                  onPress={() => this._incrementCount()}
                  title="Increment value"
              />
              <Text style={styles.texttest1}>{this.state.counter}</Text>
              <Text style={styles.texttest2}>{this.state.counter}</Text>
              <Text style={styles.texttest3}>{this.state.counter}</Text>
              <Text style={styles.texttest4}>{this.state.counter}</Text>
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
  image: {
      width: 233,
      height: 125,
  },
  texttest1: {
    fontSize: 10,
    color:  '#ffffff',
  },
  texttest2: {
    fontSize: 20,
    color:  '#917246',
  },
  texttest3: {
    fontSize: 30,
    color:  '#297348',
  },
  texttest4: {
    fontSize: 40,
    color:  '#523716',
  },
});
