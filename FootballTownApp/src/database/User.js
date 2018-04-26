import firebase from "react-native-firebase"
export default class User {

  constructor(){
      this.user = []
  }

  getUser(){
    return this.user;
  }

  signInAnonymously(){
    firebase.auth().signInAnonymously().then((response) => {
      console.log(response)
    })
  }
}
