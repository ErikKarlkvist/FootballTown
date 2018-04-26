
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
  FlatList,
  TouchableOpacity
} from 'react-native';
import {Colors, Fonts} from "../config/UIConfig"
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'

class Admin extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Admin Options',
      headerTitle: 'Admin Options',
    }
  };

  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  }

  render() {
    return (
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddGame")}>
            <Text style={styles.title}>Add Game</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddEvents")}>
            <Text style={styles.title}>Add Events</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddNews")}>
            <Text style={styles.title}>Add News</Text>
          </TouchableOpacity>
        </View>
      )
  }
}

  export default Admin;


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
      fontSize: 15,
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
