
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
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import Factory from "../database/Factory"
import TextInput from "../component/TextInput"
import {Colors, Fonts} from "../config/UIConfig"
import DatePicker from "../component/DatePicker"
class AdminAddEvents extends Component{
  constructor(props){
    super(props);
    this.state = {
      events: Factory.getEventsInstance(),
      imageUrl: "",
      title: "",
      date: new Date(),
      text: "",
      loading: false,
      location: "",
      price: ""
    }
  }

  render() {
    console.log(this.state.date)
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Image URL"} value={this.state.imageUrl} onChangeText={(text) => {this.setState({imageUrl: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Title"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Location"} value={this.state.location} onChangeText={(text) => {this.setState({location: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Event Price"} value={this.state.price} onChangeText={(text) => {this.setState({price: text})}}/>
          <DatePicker style = {{marginTop: 20}} title={"Event Date"} date={this.state.date} onDateChange={(newDate) => {this.setState({date: newDate})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Event Body"} value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Save"} onPress = {this.saveNews}/>
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

  saveNews = () => {
    const {imageUrl, title, ingress, text} = this.state

    if(!imageUrl || !title || !ingress || !text){
      Alert.alert("Please fill in all fields")
      return;
    }

    const newsObject = {
      imageUrl,
      title,
      ingress,
      text
    }

    this.setState({loading:true})
    this.state.news.addNews(newsObject).then(() => {
      this.setState({
        loading:false,
        imageUrl: "",
        title: "",
        ingress: "",
        text: "",
      })
      Alert.alert("Events succesfully uploaded");
    })
    //goBack
  }
}

  export default AdminAddEvents;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
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
    }
  });
