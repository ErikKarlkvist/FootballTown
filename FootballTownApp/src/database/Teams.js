import firebase from "react-native-firebase"
import {Alert} from "react-native"
export default class Teams {

    constructor(){
        this.teams = []
    }

    // async duplicatePlayer(){
    //   let player = await firebase.firestore().collection("players").doc("lqLIqW7sh6KfX8ezlmTB").get()
    //   player = player.data()
    //   for(let i = 0; i < 300; i++){
    //     firebase.firestore().collection("players").add(player)
    //   }
    // }

    // async duplicateTeams(){
    //   let team = await firebase.firestore().collection("teams").doc("YD2GnG9JeiYs8L0lzEdw").get()
    //   team = team.data()
    //   for(let i = 0; i < 9; i++){
    //     firebase.firestore().collection("teams").add(team)
    //   }
    // }

    addPlayer(tmpPlayer){
      const newPlayer = {
        firstName: tmpPlayer.firstName,
        lastName: tmpPlayer.lastName,
        imageUrl: tmpPlayer.imageUrl,
        position: tmpPlayer.position,
        squadNumber: tmpPlayer.squadNumber,
        createdAt: new Date().getTime()
      }
      return firebase.firestore().collection("players").add(newPlayer)
    }

    addTeam(tmpTeam){
      const newTeam = {
        name: tmpTeam.name,
        flag: tmpTeam.flag,
        headerImage: tmpTeam.headerImage,
        text: tmpTeam.text,
        points: tmpTeam.points || 0,
        draws: tmpTeam.draws || 0,
        gamesPlayed: tmpTeam.gamesPlayed || 0,
        goalsConceded: tmpTeam.goalsConceded || 0,
        goalsScored: tmpTeam.goalsScored || 0,
        rank: tmpTeam.rank || 0,
        wins: tmpTeam.wins || 0,
        losses: tmpTeam.losses || 0,
        players: tmpTeam.players || [],
        createdAt: new Date().getTime()
      }
      return firebase.firestore().collection("teams").add(newTeam).then((ref) => {
        newTeam.id = ref.id;
        this.teams.push(newTeam);
        this.teams = sortTeams(this.teams)
      })
    }

    removeTeam(id){
      for (const i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id === id){
          this.teams.splice(i, 1);
        }
      }
      this.teams = sortTeams(this.teams)

      return firebase.firestore().collection("teams").doc(id).delete()
    }

    updateTeam(tmpTeams){
      for (const i = 0; i < this.teams.length; i++) {
        if (this.teams[i].id === id){
          this.teams[i] = tmpEvents;
        }
      }
      this.teams = sortTeams(this.teams)
      const newTeam = {
        name: tmpTeams.title,
        teams: tmpTeams.teams,
        text: tmpTeams.text,
        imageUrl: tmpTeams.text
      }

      return firebase.firestore().collection("events").doc(newTeam.id).update(newTeam,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getTeams(force){
      if(this.teams > 0 && !force){
        return Promise.resolve(this.teams)
      } else {
        const teams = await firebase.firestore().collection("teams").get()

        const teamsData = [];
        teams.forEach((snapshot) => {
          result = snapshot.data()
          result.id = snapshot.id;
          teamsData.push(result)
        })

        const promises = [];
        const teamInstance = this;
        teamsData.forEach((team) =>{
          promises.push(teamInstance.getPlayers(team))
        })

        const result = await Promise.all(promises)

        this.teams = sortTeams(result);
        console.log(result)
        return Promise.resolve(result)
      }
    }

    async getPlayers(team){
      const promises = []
      const teamInstance = this;
      team.players.forEach((id) => {
        promises.push(teamInstance.getPlayerForTeam(id))
      })
      const result = await Promise.all(promises)
      team.players = result.sort();
      return Promise.resolve(team)
    }

    async getAllPlayers(){
      const players = await firebase.firestore().collection("players").get()

      const playersData = [];
      players.forEach((snapshot) => {
        result = snapshot.data()
        result.id = snapshot.id;
        playersData.push(result)
      })
      return Promise.resolve(playersData.sort())
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
};

function sortTeams(teams) {
  teams.sort((a,b) => {
    return b.points - a.points
  })
  for(const index in teams){
    teams[index].rank = parseInt(index)+1
  }
  console.log("teams",teams)
  return teams;
}
