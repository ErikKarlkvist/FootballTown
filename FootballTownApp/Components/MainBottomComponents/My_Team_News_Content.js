


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Button,Icon
} from 'native-base'

 class  My_Team_News_Content extends Component{
    render() {
      const images={
      "1":require('./g2.jpg'),
      "2":require('./g3.jpg'),
      "3":require('./g4.jpg'),
      "4":require('./g5.jpg')
      }

        return (
         <Card>
             <CardItem>
                 <Left>
                    <Thumbnail source ={require
                    ('./ge1.jpg')}/>
                    <Body>
                    <Text>
                    Gerard!!!!
                    </Text>
                    <Text note>March 28,2018
                      </Text>
                    </Body>
                  </Left>
             </CardItem>

              <CardItem cardBody>

               <Image source ={require('./g5.jpg')}
                                 style={{width:null,height:200,flex:1}}/>
             </CardItem>

             <CardItem style={{height:45}}>
                <Left>
                    <Button transparent>
                        <Icon name="ios-heart-outline"
                        style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="ios-chatbubbles-outline"
                        style={{color:'black'}}/>
                    </Button>
                    <Button transparent>
                        <Icon name="ios-send-outline"
                        style={{color:'black'}}/>
                    </Button>
                </Left>
             </CardItem>

             <CardItem style={{height:20}}>
             <Text>
               {this.props.likes}
              </Text>
             </CardItem>
             <CardItem>
                <Body>
                <Text>
                 <Text style={{fontWeight:"900"}}>
                 Football is coming to town
                  </Text>
                The 2018 FIFA World Cup will be the 21st
                FIFA World Cup, a quadrennial international football
                 tournament contested!!  </Text>
                </Body>
             </CardItem>

          </Card>

        );
      }
    }
    export default My_Team_News_Content;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
      }

    });
