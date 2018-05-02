import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import { Table, Row, Rows } from 'react-native-table-component';
import TeamDesc from "../component/TeamDesc";


let tempImage = "https://images.pexels.com/photos/39562/the-ball-stadion-football-the-pitch-39562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
let teamTitle = "Arsenal FC";
let teamText = "Arsenal F.C. is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners' Cup and one Inter-Cities Fairs Cup. It is also the only English club to go a 38-match league season unbeaten, receiving the nickname The Invincibles, and a special gold Premier League trophy.";


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


export default class Team_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Position', 'Wins', 'Draws', 'Losses', 'Points'],
      tableData: [
        ['1', '2', '3', '4', '30']

      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <ScrollView>
        <Image
        style={{width: screenWidth, height: imageHeight}}
        source={{uri: tempImage}}/>

        <View style={GlobalStyles.articleContainer}>
          <Text style={GlobalStyles.title}>{teamTitle}</Text>
        </View>

        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 0.5, borderColor: 'black'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
          </View>

          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.text}>{teamText}</Text>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,
    padding: 10,
    paddingTop: 10,


        },
  head: {
     height: 40,
     backgroundColor: '#607D8B',
        },
  text: {
    margin: 6,
    textAlign: 'center',
    color: 'black'

  },
  textHead:{
    margin: 6,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'

        }
});
