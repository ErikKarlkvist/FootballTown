
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
class AdminAddEvents extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: Factory.getEventsInstance(),
      teams: Factory.getTeamsInstance(),
      imageUrl: "",
      title: "",
      date: new Date(),
      text: "",
      loading: false,
      location: "",
      price: "",
      fetchedTeams: [],
      pickedTeams: [],
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
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Event Body"} value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Location"} value={this.state.location} onChangeText={(text) => {this.setState({location: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Price"} value={this.state.price} onChangeText={(text) => {this.setState({price: text})}}/>

          <Text style = {styles.title}>Teams in event</Text>
          <FlatList
            data={this.state.fetchedTeams}
            renderItem={({ item }) => (
              <ListPicker title={item.name} value={this.state.pickedTeams.includes(item.id)} onValueChange={() => {return this.addTeam(item)}}/>
            )}
            extraData={this.state}
            keyExtractor={item => item.id}
          />
          <View style={styles.underline}/>

          <DatePicker style = {{marginTop: 20}} title={"Event Date"} date={this.state.date} onDateChange={(newDate) => {this.setState({date: newDate})}}/>
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

  addTeam(item){
    const {pickedTeams} = this.state
    let value = false;
    if(pickedTeams.includes(item.id)){
      const index = pickedTeams.indexOf(item.id);
      pickedTeams.splice(index, 1);
    } else {
      value = true;
      pickedTeams.push(item.id)
    }
    this.setState({pickedTeams})
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

  export default AdminAddEvents;


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
