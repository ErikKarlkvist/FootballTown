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
import Table from 'react-native-simple-table';
import TmpDataFactory from '../database/TmpDataFactory'



let tempImage = "https://images.pexels.com/photos/39562/the-ball-stadion-football-the-pitch-39562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
let teamTitle = "Arsenal FC";
let teamText = "Arsenal F.C. is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. The club has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners' Cup and one Inter-Cities Fairs Cup. It is also the only English club to go a 38-match league season unbeaten, receiving the nickname The Invincibles, and a special gold Premier League trophy.";

const columns = [
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Wins',
    dataIndex: 'wins',
  },
  {
    title: 'Draws',
    dataIndex: 'draws'
  },
  {
    title: 'Losses',
    dataIndex: 'losses'
  },
  {
    title: 'Points',
    dataIndex: 'points'
  },
];


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;




class Team_page extends Component{
  render(){
     let dataSource = TmpDataFactory.generate().data;
    return (
      <ScrollView>
        <Image
        style={{width: screenWidth, height: imageHeight}}
        source={{uri: tempImage}}/>



        <View style={GlobalStyles.articleContainer}>
          <Text style={GlobalStyles.title}>{teamTitle}</Text>
          <View style={styles.container}>
          <Table height={70} columnWidth={70} columns={columns} dataSource={dataSource} />
          </View>
          <Text style={GlobalStyles.text}>{teamText}</Text>
        </View>
      </ScrollView>

    );
  }
}
export default Team_page;


const styles = StyleSheet.create({
  container: {
        paddingTop: '3%',
        paddingLeft: '4%',
  }
});
