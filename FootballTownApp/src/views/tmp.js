import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import firebase from 'react-native-firebase'
import Factory from "../database/Factory";
import {Colors, Fonts} from '../config/UIConfig.js';
import {GlobalStyles} from '../config/UIStyleSheet.js';

const News = Factory.getNewsInstance();
const Events = Factory.getEventsInstance();
const Games = Factory.getGamesInstance();

export default class Tmp extends React.Component {
  constructor(){
      super()
      console.log(Factory);

      //News test
      News.addNews({id: "000005",
                   title: "Glory Glory Man Utd",
                   text: "Everyone Loved MAN UTD"});
      console.log(News.getNews());

      //Events test
      Events.addEvents({id: "00004",
                        title:"Event4",
                        text:"Fun event"});
      console.log(Events.getEvents());

      //Games Test
      Games.addGames({id: "00004",
                        hometeam: "Stoke",
                        awayteam: "West Ham",
                        result: "2-2"});
      console.log(Games.getGames());
  }

  render() {
      return (
          <View style={styles.container}>

              <Text style={GlobalStyles.title}>hello</Text>
              <TouchableOpacity onPress={this.props.onPress}>
                <Text>TMP normal</Text>

              </TouchableOpacity>
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
