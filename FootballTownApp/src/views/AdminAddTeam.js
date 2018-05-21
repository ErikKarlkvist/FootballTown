
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
import ListPicker from "../component/ListPicker"
import {Colors, Fonts} from "../config/UIConfig"
class AdminAddTeam extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Add Team"
    }
  };

  constructor(props){
    super(props);
    this.state = {
      teams: Factory.getTeamsInstance(),
      name: "",
      flag: "",
      headerImage: "",
      text: "",
      points: "0",
      draws: "0",
      gamesPlayed: "0",
      goalsConceded: "0",
      goalsScored: "0",
      rank: "0",
      wins: "0",
      losses: "0",
      players: [],
      fetchedPlayers: [],
      loading: false
    }
  }

  componentDidMount(){
    this.state.teams.getAllPlayers().then((players) => {
      this.setState({fetchedPlayers:players})
    })
  }

  render() {
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Flag URL"} value={this.state.flag} onChangeText={(text) => {this.setState({flag: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Name"} value={this.state.name} onChangeText={(text) => {this.setState({name: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Header Image URL"} value={this.state.headerImage} onChangeText={(text) => {this.setState({headerImage: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Description"} value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Points"} value={this.state.points} onChangeText={(text) => {this.setState({points: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Wins"} value={this.state.wins} onChangeText={(text) => {this.setState({wins: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Draws"} value={this.state.draws} onChangeText={(text) => {this.setState({draws: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Losses"} value={this.state.losses} onChangeText={(text) => {this.setState({losses: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Games played"} value={this.state.gamesPlayed} onChangeText={(text) => {this.setState({gamesPlayed: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Goals Scored"} value={this.state.goalsScored} onChangeText={(text) => {this.setState({goalsScored: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Goals Conceded"} value={this.state.goalsConceded} onChangeText={(text) => {this.setState({goalsConceded: text})}}/>
          <TextInput style = {{marginTop: 20}} keyboardType={"numeric"} title={"Rank"} value={this.state.rank} onChangeText={(text) => {this.setState({rank: text})}}/>
          <Text style = {styles.title}>Players in team</Text>
          <FlatList
            data={this.state.fetchedPlayers}
            renderItem={({ item }) => (
              <ListPicker title={`${item.firstName} ${item.lastName}`} value={this.state.players.includes(item.id)} onValueChange={() => {return this.addPlayer(item)}}/>
            )}
            extraData={this.state}
            keyExtractor={item => item.id}
          />
          <View style={styles.underline}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Save"} onPress = {this.saveTeam}/>
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

  addPlayer(item){
    const {players} = this.state
    let value = false;
    if(players.includes(item.id)){
      const index = players.indexOf(item.id);
      players.splice(index, 1);
    } else {
      value = true;
      players.push(item.id)
    }
    this.setState({players})
  }

  saveTeam = () => {
    const {
      name,
      flag,
      headerImage,
      text,
      points,
      draws,
      gamesPlayed,
      goalsConceded,
      goalsScored,
      rank,
      wins,
      losses,
      players,
    } = this.state

    if(!flag || !name || !headerImage || !text){
      Alert.alert("Please fill at least name, flag, header image and Description")
      return;
    }

    const teamsObject = {
      name,
      flag,
      headerImage,
      text,
      points,
      draws,
      gamesPlayed,
      goalsConceded,
      goalsScored,
      rank,
      wins,
      losses,
      players,
    }

    this.setState({loading:true})
    this.state.teams.addTeam(teamsObject).then(() => {
      this.state.teams.getTeams(true)
      this.setState({
        loading:false,
      })
      Alert.alert("Team succesfully uploaded");
    })
    //goBack
  }
}

  export default AdminAddTeam;


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
    }
  });
