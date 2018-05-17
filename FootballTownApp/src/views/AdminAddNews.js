
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
class AdminAddNews extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Add News"
    }
  };

  constructor(props){
    super(props);
    if(this.props.navigation.state.params && this.props.navigation.state.params.newsStory){
      const newsStory = this.props.navigation.state.params.newsStory
      this.state = {
        news: Factory.getNewsInstance(),
        imageUrl: newsStory.imageUrl,
        title: newsStory.title,
        ingress: newsStory.ingress,
        text: newsStory.text,
        loading: false,
        update: true
      }
    } else {
      this.state = {
        news: Factory.getNewsInstance(),
        imageUrl: "",
        title: "",
        ingress: "",
        text: "",
        loading: false,
        update: false
      }
    }
  }

  render() {
    if(!this.state.loading){
      return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput title={"Featured Image URL"} value={this.state.imageUrl} onChangeText={(text) => {this.setState({imageUrl: text})}}/>
          <TextInput style = {{marginTop: 20}} title={"Article Title"} value={this.state.title} onChangeText={(text) => {this.setState({title: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 80}} title={"Article Summary"} value={this.state.ingress} onChangeText={(text) => {this.setState({ingress: text})}}/>
          <TextInput style = {{marginTop: 20}} inputStyle = {{height: 120}} title={"Article Body"} value={this.state.text} onChangeText={(text) => {this.setState({text: text})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={this.state.update ? "Update" : "Save"} onPress = {this.saveNews}/>
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
    const id = (this.props.navigation && this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.newsStory) ? this.props.navigation.state.params.newsStory.id : ""

    const newsObject = {
      imageUrl,
      title,
      ingress,
      text,
      id
    }


    if(this.state.update){
      this.state.news.updateNews(newsObject)
      Alert.alert("News succesfully updated");
      this.props.navigation.state.params.refresh(newsObject)
    } else {
      this.setState({loading:true})
      this.state.news.addNews(newsObject).then(() => {
        this.setState({
          loading:false,
        })
        Alert.alert("News succesfully uploaded");
      })
    }
    //goBack
  }
}

  export default AdminAddNews;


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
