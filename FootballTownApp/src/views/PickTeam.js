import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Picker,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles, PromptStyles} from '../config/UIStyleSheet';
import Factory from '../database/Factory'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;

class PickTeam extends Component{

  constructor(props) {
  	super(props);
  	this.state = {
  		loading: false,
  		errors: null,
  		refreshing: false,
      teams: Factory.getTeamsInstance(),
      fetchedTeams: [],
  	};

  }

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%',}}
        source={require('../resources/football-stadium.jpg')}
      >
      <ScrollView centerContent={true} style={PromptStyles.page}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={PromptStyles.box}>
          <Text style={PromptStyles.title}>Show your support</Text>
          <View style={PromptStyles.pickerContainer}>
            <Picker
              selectedValue={'java'}
              style={PromptStyles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({team: itemValue})}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View style={PromptStyles.buttonContainer}>
            <Button style={PromptStyles.button} color={Colors.Primary} title={"Lets Go!"}/>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
    );
  }
}

export default PickTeam;
