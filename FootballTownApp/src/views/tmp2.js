import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import firebase from 'react-native-firebase'
import Factory from "../database/Factory";

const News = Factory.getNewsInstance();
const Events = Factory.getEventsInstance();
const Games = Factory.getGamesInstance();

export default class Tmp2 extends React.Component {
    constructor(){
        super()

        //News test
        News.addNews({id: "000006",
            title: "Hello",
            text: "Bye"})
        console.log(News.getNews())

        //Events test
        Events.addEvents({id: "00005",
                          title:"Event5",
                          text:"Bad event"})
        console.log(Events.getEvents());

        //Games Test
        Games.addGames({id: "00005",
                          hometeam: "Newcastle",
                          awayteam: "West Brom",
                          result: "1-2"});
        console.log(Games.getGames());
    }

  render() {
      return (
          <View style={styles.container}>

              <TouchableOpacity onPress={this.props.onPress}>
                <Text>TMP2</Text>

              </TouchableOpacity>
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
  image: {
      width: 250,
      height: 250,
  },
});
