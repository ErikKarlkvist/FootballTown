import firebase from "react-native-firebase"
import {Alert, AsyncStorage} from "react-native"
export default class User {

  constructor(){
      this.isAdmin = false;
  }

  getIsAdmin(){
    return this.isAdmin;
  }

  async getAuthorization() {
    firebase.auth().onAuthStateChanged(async (auth) => {
      if (auth) {
        let admin = await firebase.firestore().collection("users").doc(auth._user.uid).get()
        admin = admin.data()
        if(admin.role === "admin"){
          this.isAdmin = true;
        }
      }
    });
  }

  async loginAdmin(email, password) {
    try {
      const auth = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      let admin = await firebase.firestore().collection("users").doc(auth.user.uid).get()
      admin = admin.data()
      if(admin.role === "admin"){
        this.isAdmin = true;
      }
      return Promise.resolve(true)
    } catch(e) {
      Alert.alert("Failed to login. Check credentials.", e.message)
      return Promise.resolve(false)
    }
  }

  async logout() {
    try {
      await firebase.auth().signOut()
      this.isAdmin = false;
      return Promise.resolve(true)
    } catch(e){
      return Promise.resolve(false)
    }
  }

  async setFollowingTeam(id){
    try {
      await AsyncStorage.setItem('userTeam', id)
      return Promise.resolve(true)
    } catch (error) {
      return Promise.resolve(false)
      // Error saving data
    }
  }

  async getFollowingTeam(id){
    try {
      const id = await AsyncStorage.getItem('userTeam')
      const snapshot = await firebase.firestore().collection("teams").doc(id).get()
      const team = await this.getPlayers(snapshot.data())
      return Promise.resolve(team)
    } catch (error) {
      return Promise.resolve("error")
      // Error saving data
    }
  }

  async getPlayers(team){
    const promises = []
    const teamInstance = this;
    team.players.forEach((id) => {
      promises.push(teamInstance.getPlayerForTeam(id))
    })
    const result = await Promise.all(promises)
    team.players = result;
    return Promise.resolve(team)
  }

  async getPlayerForTeam(id) {
    try {
      const snapshot = await firebase.firestore().collection("players").doc(id).get()
      const player = snapshot.data()
      player.id = snapshot.id;
      return Promise.resolve(player)
    }catch(e){
      return Promise.resolve("NO SUCH PLAYER ID")
    }
  }

  getUser(){
    return this.user;
  }
}
