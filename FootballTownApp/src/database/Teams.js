import firebase from "react-native-firebase"
import {Alert} from "react-native"
export default class Teams {

    constructor(){
        this.teams = []
    }

    // async duplicatePlayer(){
    //   let player = await firebase.firestore().collection("players").doc("lqLIqW7sh6KfX8ezlmTB").get()
    //   player = player.data()
    //   for(let i = 0; i < 109; i++){
    //     firebase.firestore().collection("players").add(player)
    //   }
    // }

    async duplicateTeams(){
      let team = await firebase.firestore().collection("teams").doc("YD2GnG9JeiYs8L0lzEdw").get()
      team = team.data()
      for(let i = 0; i < 9; i++){
        firebase.firestore().collection("teams").add(team)
      }
    }

    addTeam(tmpTeam){
      const newEvent = {
        name: tmpTeam.title,
        flag: tmpTeam.teams || [],
        points: tmpTeam.points || 0,
        createdAt: new Date().getTime()
      }
      return firebase.firestore().collection("teams").add(tmpTeam).then((ref) => {
        newEvent.id = ref.id;
        this.events.push(newEvent);
      })
    }

    removeTeam(id){
      for (const i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id === id){
          this.teams.splice(i, 1);
        }
      }

      return firebase.firestore().collection("games").doc(id).remove()
    }

    updateTeam(tmpTeams){
      for (const i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id === id){
          this.teams[i] = tmpEvents;
        }
      }

      const newTeam = {
        name: tmpTeams.title,
        teams: tmpTeams.teams,
        text: tmpTeams.text,
        imageUrl: tmpTeams.text
      }

      return firebase.firestore().collection("events").doc(newTeam.id).set(newTeam,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getTeams(){
      if(this.teams > 0){
        return Promise.resolve(this.teams)
      } else {
        const teams = await firebase.firestore().collection("teams").get()

        const teamsData = [];
        teams.forEach((snapshot) => {
          result = snapshot.data()
          result.id = snapshot.id;
          teamsData.push(result)
        })

        this.teams = teamsData;
        return Promise.resolve(teamsData)
      }
    }
};
