
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
  ActivityIndicator
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import TextInput from "../component/TextInput"
import {Colors, Fonts} from "../config/UIConfig"
class AdminAddPlayer extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Add Player"
    }
  };

  constructor(props){
    super(props);
    this.state = {
      teams: Factory.getTeamsInstance(),
      imageUrl: "",
      firstName: "",
      lastName: "",
      position: "",
      squadNumber: "",
      loading: false
    }
  }

  render() {
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Image URL"} value={this.state.imageUrl} onChangeText={(text) => {this.setState({imageUrl: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Firstname"} value={this.state.firstName} onChangeText={(text) => {this.setState({firstName: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 80}} title={"Lastname"} value={this.state.lastName} onChangeText={(text) => {this.setState({lastName: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Position"} value={this.state.position} onChangeText={(text) => {this.setState({position: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Squad Number"} value={this.state.squadNumber} onChangeText={(text) => {this.setState({squadNumber: text})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Save"} onPress = {this.savePlayer}/>
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

  savePlayer = () => {
    const {imageUrl, firstName, lastName, position, squadNumber} = this.state

    if(!imageUrl || !firstName || !lastName || !position || !squadNumber){
      Alert.alert("Please fill in all fields")
      return;
    }

    const playerObject = {
      imageUrl,
      firstName,
      lastName,
      position,
      squadNumber
    }

    this.setState({loading:true})
    this.state.teams.addPlayer(playerObject).then(() => {
      this.setState({
        loading:false,
      })
      Alert.alert("Player succesfully uploaded");
    })
    //goBack
  }
}

  export default AdminAddPlayer;


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
    }
  });
