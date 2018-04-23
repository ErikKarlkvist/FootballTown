


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Button,Icon,ListItem,List,
Container,Content
} from 'native-base'

class Ranks_page extends Component{
  render() {
return (
      <Container>
      <Text style={styles.welcome}>Current Ranks </Text>
        <Content>
        <ScrollView>
           <Card>
                <List>
                    <ListItem itemDivider>
                        <CardItem cardBody style={{height:80,width:null,flex:1}}>
                          <Text style={styles.welcome}>1 </Text>
                           <Thumbnail source ={require('./ball.jpg')}/>
                          <Text style={styles.welcome}>Team 1</Text>
                           <Text style={styles.points}>50 pts</Text>
                        </CardItem>
                    </ListItem>
                   <ListItem itemDivider>
                        <CardItem cardBody style={{height:80,width:null,flex:1}}>
                          <Text style={styles.welcome}>2 </Text>
                           <Thumbnail source ={require('./ball.jpg')}/>
                          <Text style={styles.welcome}>Team 2</Text>
                           <Text style={styles.points}>49 pts</Text>
                        </CardItem>
                    </ListItem>
                   <ListItem itemDivider>
                        <CardItem cardBody style={{height:80,width:null,flex:1}}>
                          <Text style={styles.welcome}>3 </Text>
                           <Thumbnail source ={require('./ball.jpg')}/>
                          <Text style={styles.welcome}>Team 3</Text>
                           <Text style={styles.points}>48 pts</Text>
                        </CardItem>
                    </ListItem>
                    <ListItem itemDivider>
                         <CardItem cardBody style={{height:80,width:null,flex:1}}>
                           <Text style={styles.welcome}>4 </Text>
                            <Thumbnail source ={require('./ball.jpg')}/>
                           <Text style={styles.welcome}>Team 4</Text>
                            <Text style={styles.points}>47 pts</Text>
                         </CardItem>
                     </ListItem>
                   <ListItem itemDivider>
                        <CardItem cardBody style={{height:80,width:null,flex:1}}>
                          <Text style={styles.welcome}>5 </Text>
                           <Thumbnail source ={require('./ball.jpg')}/>
                          <Text style={styles.welcome}>Team 5</Text>
                           <Text style={styles.points}>46 pts</Text>
                        </CardItem>
                    </ListItem>
                    <ListItem itemDivider>
                         <CardItem cardBody style={{height:80,width:null,flex:1}}>
                           <Text style={styles.welcome}>6 </Text>
                            <Thumbnail source ={require('./ball.jpg')}/>
                           <Text style={styles.welcome}>Team 6</Text>
                            <Text style={styles.points}>45 pts</Text>
                         </CardItem>
                     </ListItem>
                   <ListItem itemDivider>
                        <CardItem cardBody style={{height:80,width:null,flex:1}}>
                          <Text style={styles.welcome}>7 </Text>
                           <Thumbnail source ={require('./ball.jpg')}/>
                          <Text style={styles.welcome}>Team 7</Text>
                           <Text style={styles.points}>44 pts</Text>
                        </CardItem>
                    </ListItem>
                    <ListItem itemDivider>
                         <CardItem cardBody style={{height:80,width:null,flex:1}}>
                           <Text style={styles.welcome}>8</Text>
                            <Thumbnail source ={require('./ball.jpg')}/>
                           <Text style={styles.welcome}>Team 7</Text>
                            <Text style={styles.points}>42pts</Text>
                         </CardItem>
                     </ListItem>
                </List>
           </Card>
        </ScrollView>
        </Content>
        </Container>
    );

    }
  }

  export default Ranks_page;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },

  });