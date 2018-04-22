
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
      date: new Date(),
      loading: false,
      fetchedTeams: [],
      team1: "",
      team2: "",
      goals1: "",
      goals2: "",
      status: "",
      referee: "",
      location: "",
      text: ""
    }
  }

  componentDidMount(){
    this.state.teams.getTeams().then((teams) => {
      this.setState({fetchedTeams:teams})
    })
  }

  render() {
    const showGoals = this.state.status && this.state.status !== "pending"
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput style = {{marginTop: 20}} title={"Location"} value={this.state.location} onChangeText={(text) => {this.setState({location: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Referee"} value={this.state.referee} onChangeText={(text) => {this.setState({referee: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Game Info"} value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>

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

          <View style={styles.statusContainer}>
            <Text style = {styles.title}>Select status</Text>
            <ListPicker title={"Active"} value={this.state.status === "active"} onValueChange={() => {this.setStatus("active")}}/>
            <ListPicker title={"Pending"} value={this.state.status === "pending"} onValueChange={() => {this.setStatus("pending")}}/>
            <ListPicker title={"Over"} value={this.state.status === "over"} onValueChange={() => {this.setStatus("over")}}/>
            <View style={styles.underline}/>
          </View>

          {showGoals && <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Team 1 goals"} value={this.state.goals1} onChangeText={(text) => {this.setState({goals1: text})}}/>}
          {showGoals && <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Team 2 goals"} value={this.state.goals2} onChangeText={(text) => {this.setState({goals2: text})}}/>}

          <DatePicker style = {{marginTop: 20}} title={"Game Date"} date={this.state.date} onDateChange={(newDate) => {this.setState({date: newDate})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Save"} onPress = {this.saveGame}/>
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

  setStatus = (status) => {
    if(this.state.status === status){
      this.setState({status:""})
    }else {
      this.setState({status})
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

  saveGame = () => {
    const {location, referee, date, team1, team2, status, goals1, goals2, text} = this.state
    console.log(location, referee, date, team1, team2, status, goals1, goals2)
    let gameObject = {}
    if(status && status !== "pending"){
      if(!referee || !team1 || !team2 || !goals1 || !goals2){
        Alert.alert("Please fill in all fields")
        return;
      }
      gameObject = {
        location,
        referee,
        team1Uid: team1,
        team2Uid: team2,
        status,
        goals1,
        goals2,
        text,
        date: date.getTime()
      }
    } else {
      if(!status || !referee || !team1 || !team2){
        Alert.alert("Please fill in all fields")
        return;
      }
      gameObject = {
        location,
        referee,
        team1Uid: team1,
        team2Uid: team2,
        status,
        text,
        date: date.getTime()
      }
    }

    this.setState({loading:true})
    this.state.games.addGame(gameObject).then(() => {
      this.setState({
        loading:false,
      })
      Alert.alert("Game succesfully uploaded");
    })
    //goBack
  }
}

  export default AdminAddGame;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 200,
      backgroundColor: Colors.CardBackground
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
    },
    statusContainer: {
      marginTop: 20,
    }
  });
