

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

class Matches_page extends Component{
  render() {
      return (
            <Container>
            <Text style={styles.welcome}>Upcoming Mathes </Text>
              <Content>
              <ScrollView>
                 <Card>
                      <List>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 1 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 2</Text>
                              </CardItem>
                          </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 3 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 4</Text>
                              </CardItem>
                          </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 5 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 6</Text>
                              </CardItem>
                          </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 7</Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 8</Text>
                              </CardItem>
                          </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 9 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 10</Text>
                              </CardItem>
                          </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 11 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 12</Text>
                              </CardItem>
                          </ListItem>
                           <ListItem itemDivider>
                               <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                 <Text style={styles.welcome}>Team 13 </Text>
                                  <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>VS</Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                  <Text style={styles.welcome}>Team 14</Text>
                               </CardItem>
                           </ListItem>
                          <ListItem itemDivider>
                              <CardItem cardBody style={{height:80,width:null,flex:1}}>
                                <Text style={styles.welcome}>Team 15 </Text>
                                 <Thumbnail source ={require('./ball.jpg')}/>
                                <Text style={styles.welcome}>VS</Text>
                                <Thumbnail source ={require('./ball.jpg')}/>
                                 <Text style={styles.welcome}>Team 16</Text>
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

  export default Matches_page;


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