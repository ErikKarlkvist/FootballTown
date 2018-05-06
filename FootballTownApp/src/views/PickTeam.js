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
  ActivityIndicator,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles, PromptStyles} from '../config/UIStyleSheet';
import Factory from '../database/Factory'

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;

class PickTeam extends Component{
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
  })
  constructor(props) {
  	super(props);
  	this.state = {
  		loading: false,
  		errors: null,
  		refreshing: false,
      teams: Factory.getTeamsInstance(),
      selectedTeam: 0,
      fetchedTeams: [],
      pickerItems: [],
  	};

  }

  componentDidMount(){
    this.setState({loading: true})
    this.state.teams.getTeams().then((teams) => {
      var pickerItems = []
      var fetchedTeams = []
      for (const UID in teams) {
        const items = <Picker.Item label={teams[UID].name} value={UID} />
        pickerItems.push(items)
        fetchedTeams.push(teams[UID])
      }
      this.setState({
        loading: false,
        fetchedTeams: fetchedTeams,
        pickerItems: pickerItems,
      })
    })
  }


  render() {
    console.log(this.state.selectedTeam)
    if(this.state.loading){
      return (
        <ImageBackground
        style={{width: '100%', height: '100%', justifyContent: 'center', alignItems:'center',}}
        source={require('../resources/football-stadium.jpg')}
      >
        <ActivityIndicator size="large" color={'white'}/>
      </ImageBackground>
      );
    } else {
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
              selectedValue={this.state.selectedTeam}
              style={PromptStyles.picker}
              mode = "dropdown"
              onValueChange={(itemValue, itemIndex) => this.setState({selectedTeam: itemValue})}>
              {this.state.pickerItems}
            </Picker>
          </View>
          <View style={PromptStyles.buttonContainer}>
            <Button style={PromptStyles.button} color={Colors.Primary} title={"Lets Go!"} onPress = {this.onPress} />
          </View>
        </View>
        </ScrollView>
        </ImageBackground>
      )
    }
  }

  onPress = () => {
    console.log(this.state.fetchedTeams[this.state.selectedTeam].id)
    Factory.getUserInstance().setFollowingTeam(this.state.fetchedTeams[this.state.selectedTeam].id)
    this.props.setHasSelected(true)
  }

}

export default PickTeam;
