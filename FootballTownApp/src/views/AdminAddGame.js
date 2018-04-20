
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
  Button,
  ScrollView,
  Alert,
  ActivityIndicator,
  FlatList
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import TextInput from "../component/TextInput"
import {Colors, Fonts} from "../config/UIConfig"
import DatePicker from "../component/DatePicker"
import ListPicker from "../component/ListPicker"


class AdminAddGame extends Component{
  constructor(props){
    super(props);
    this.team1 = ""
    this.team2 = ""
    this.state = {
      games: Factory.getGamesInstance(),
      teams: Factory.getTeamsInstance(),
      title: "",
      date: new Date(),
      loading: false,
      fetchedTeams: [],
      team1: "",
      team2: "",
      goals1: "",
      goals2: ""
    }
  }

  componentDidMount(){
    this.state.teams.getTeams().then((teams) => {
      this.setState({fetchedTeams:teams})
    })
  }

  render() {
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Image URL"} value={this.state.imageUrl} onChangeText={(text) => {this.setState({imageUrl: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Title"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>

          <Text style = {styles.title}>Select team 1</Text>
          <FlatList
            data={this.state.fetchedTeams}
            renderItem={({ item }) => (
              <ListPicker title={item.name} value={this.state.team1 === item.id} onValueChange={() => {return this.addTeam1(item)}}/>
            )}
            extraData={this.state}
            keyExtractor={item => item.id}
          />
          <View style={styles.underline}/>

          <Text style = {styles.title}>Select team 2</Text>
          <FlatList
            data={this.state.fetchedTeams}
            renderItem={({ item }) => (
              <ListPicker title={item.name} value={this.state.team2 === item.id} onValueChange={() => {this.addTeam2(item)}}/>
            )}
            extraData={this.state}
            keyExtractor={item => item.id}
          />
          <View style={styles.underline}/>

          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Team1 goals"} value={this.state.goals1} onChangeText={(text) => {this.setState({goals1: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Team2 goals"} value={this.state.goals2} onChangeText={(text) => {this.setState({goals2: text})}}/>

          <DatePicker style = {{marginTop: 20}} title={"Game Date"} date={this.state.date} onDateChange={(newDate) => {this.setState({date: newDate})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Save"} onPress = {this.saveEvent}/>
          </View>

        </View>
        </ScrollView>
      );
    } else {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PrimaryDark}/>
        </View>
      )
    }
  }


  addTeam1(item){
    let {team1} = this.state
    let value = false;
    if(team1 === item.id){
      team1 = ""
    } else {
      team1 = item.id
      value = true;
    }
    this.setState({team1})
  }

  addTeam2(item){
    let {team2} = this.state
    let value = false;
    if(team2 === item.id){
      team2 = ""
    } else {
      team2 = item.id
      value = true;
    }
    this.setState({team2})
  }

  saveEvent = () => {
    const {imageUrl, title, text, date, pickedTeams, price, location} = this.state

    if(!imageUrl || !title || !price || !text || !location){
      Alert.alert("Please fill in all fields")
      return;
    }

    const eventsObject = {
      imageUrl,
      title,
      text,
      price,
      location,
      teams: pickedTeams,
      date: date.getTime()
    }

    this.setState({loading:true})
    this.state.events.addEvent(eventsObject).then(() => {
      this.setState({
        loading:false,
      })
      Alert.alert("Event succesfully uploaded");
    })
    //goBack
  }
}

  export default AdminAddGame;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      marginBottom: 200
    },
    loadingContainer: {
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonContainer: {
      margin: 20,
      height: 50
    },
    title: {
      fontSize: 12,
      padding: 20,
      color: Colors.Primary,
      fontFamily: Fonts.Body
    },
    underline: {
      borderBottomWidth: 1,
      borderColor: Colors.PrimaryText,
      marginLeft: 20,
      marginRight: 20
    }
  });
