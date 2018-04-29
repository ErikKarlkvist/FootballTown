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
import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Button,ListItem,List,
Container, Content
} from 'native-base'//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Factory from "../database/Factory"

import Matches_page from '../views/Matches_page'
import Icon from 'react-native-vector-icons/Ionicons';
class Matchesinfo_page extends Component{

constructor(props){
  super(props);
}

render() {
    return (
  <Container>
    <Content>
        <Card>
          <CardItem bordered  alignItems='center'>

              <Image
            style={{width: 30, height: 30}}
            source={{uri: this.props.team1}}
             />
           <Text style={styles.teams}> {this.props.games.team1}</Text>
          <Text style={styles.scores}>{this.props.games.score1}</Text>
          <Text> - </Text>
          <Text style={styles.scores}>{this.props.games.score2}</Text>
           <Text style={styles.teams}> {this.props.games.team2}</Text>

             </CardItem>
            <CardItem>
                <View style={GlobalStyles.articleContainer}>
                 <Text style={GlobalStyles.ingress}>Details</Text>
                 </View>
           </CardItem>
           <CardItem bordered  alignItems='center'>
            

               <Icon name='location' size={20} color='' style={style.location}/>
               <Text style={GlobalStyles.ingress}>Allianz Arena, Munchen, Germany</Text>
               <Icon name='calander' size={20} color='' style={style.calander}/>
               <Text style={GlobalStyles.text}>date.calander</Text>
              <Icon name='Flag' size={20} color='' style={style.Flag}/>
              <Text style={GlobalStyles.text}>Johan Smith</Text>
              <View>
               <Text style={GlobalStyles.text}> “I fly out to London on Monday, so I can get there. But I didn’t go to the [quarter-final first leg] in Barcelona,” he told the Guardian. “I did go to the return game in Rome, so I don’t know. I have to go through my list of superstitions. It’s a bunch of little things.”

               Roma are all about the fine details these days. It is almost six years since Pallotta took charge – by coincidence, his appointment was confirmed before a friendly against Liverpool in 2012 – and in that time the club has undergone a cultural shift. Changes wrought by his ownership group have helped to bring the club to its first European Cup semi-final in 34 years.</Text>
             </View>
         </CardItem>
     </Card>
 </Content>
</Container>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: Colors.Primary,
    padding: 10,
    height: 60,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
  },
  teams:{
  color: 'black',
  fontWeight: 'bold',
  fontSize: 16,
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 10
  },
  scores:{
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold',
  alignItems: 'center'
  }
});

export default Matchesinfo_page;
