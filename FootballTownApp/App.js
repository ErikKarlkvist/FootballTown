import React from 'react';
import { AppRegistry, Text, View} from 'react-native';
//import firebase from 'react-native-firebase'
import MatchComponent from './src/component/MatchComponent';

export default class App extends React.Component {
  constructor(){
      super()
  }

  render() {
      return (
          <View>
              <MatchComponent team1= "Barcelona" score1=" 3 " score2= ' - 2 ' team2= "Liverpool"/>

          </View>

      );
  }
}


{/*const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#24cdda',
      alignItems: 'center',
      justifyContent: 'center',
  },
  image: {
      width: 250,
      height: 250,
  },
}); */}

AppRegistry.registerComponent('App', () => App);
