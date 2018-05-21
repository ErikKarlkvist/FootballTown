
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
import TextInput from "../component/TextInput"
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import Factory from "../database/Factory"
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
      user: Factory.getUserInstance(),
      loading: false,
      email: "",
      password: ""
    }
  }

  componentDidMount(){

  }

  render() {
    if(this.state.user.getIsAdmin()){

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
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddPlayer")}>
            <Text style={styles.title}>Add Player</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAddTeam")}>
            <Text style={styles.title}>Add Team</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.logout}>
            <Text style={styles.title}>Log out</Text>
          </TouchableOpacity>
        </View>
      )
    } else if(this.state.loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.PrimaryDark}/>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.title}>Admin login</Text>
          <TextInput style = {{marginTop: 20}} title={"Email"} value={this.state.email} onChangeText={(text) => {this.setState({email: text})}}/>
          <TextInput style = {{marginTop: 20}} secureTextEntry={true} title={"Password"} value={this.state.password} onChangeText={(text) => {this.setState({password: text})}}/>
          <View style= {styles.buttonContainer}>
            <Button color={Colors.Primary} title={"Login"} onPress = {this.login}/>
          </View>
        </View>
      )
    }
  }

  logout = () => {
    this.setState({loading:true})
    this.state.user.logout().then(() => {
      this.setState({loading: false})
    })
  }

  login = () => {
    if(!this.state.email){
      Alert.alert("Missing email", "Please submit an email")
    }
    if(!this.state.password){
      Alert.alert("Missing password", "Please submit a password")
    }
    this.setState({loading:true})
    this.state.user.loginAdmin(this.state.email, this.state.password).then(() => {
      this.setState({loading: false})
    })
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
    },
    buttonContainer: {
      margin: 20,
      height: 50
    },
  });
