import firebase from "react-native-firebase"
import {Alert} from "react-native"
import Factory from "./Factory"
export default class Games {

    constructor(){
        this.games = []
    }

    addGame(tmpGame){
      let newGame = {}
      if(tmpGame.status !== "pending"){
        newGame = {
          team1: tmpGame.team1Uid,
          team2: tmpGame.team2Uid,
          goals1: tmpGame.goals1,
          goals2: tmpGame.goals2,
          date: tmpGame.date,
          status: tmpGame.status,
          referee: tmpGame.referee,
          text: tmpGame.text,
          createdAt: new Date().getTime()
        }
      } else {
        newGame = {
          team1: tmpGame.team1Uid,
          team2: tmpGame.team2Uid,
          date: tmpGame.date,
          status: tmpGame.status,
          referee: tmpGame.referee,
          text: tmpGame.text,
          createdAt: new Date().getTime()
        }
      }

      return firebase.firestore().collection("games").add(newGame).then((ref) => {
        newGame.id = ref.id;
        this.games.push(newGame);
        this.games = this.sortOnDate(this.games)
      })
    }

    removeGame(id){
      for (const i = 0; i < this.games.lengconst; i++) {
        if (this.games[i].id === id){
          this.games.splice(i, 1);
        }
      }
      return firebase.firestore().collection("games").doc(id).delete()
    }

    updateGames(tmpGame){
      for (const i = 0; i < this.games.length; i++) {
        if (this.games[i].id === tmpGame.id){
          this.games[i] = tmpGame;
        }
      }

      const newGame = {
        team1: tmpGame.team1Uid,
        team2: tmpGame.team2Uid,
        date: tmpGame.date,
        status: tmpGame.status,
        referee: tmpGame.referee,
        text: tmpGame.text,
      }
      return firebase.firestore().collection("games").doc(tmpGame.id).update(newGame).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getGames(force){
      //onst games = await firebase.firestore().collection("games").get()
      if(this.games.length > 0 && !force){
        return Promise.resolve(this.games)
      } else {
        try {
          const games = await firebase.firestore().collection("games").get()
          const teams = await Factory.getTeamsInstance().getTeams()

          const results = []
          let cleanedResult = []
          games.forEach((snapshot) => {
            result = snapshot.data()
            result.id = snapshot.id;
            results.push(result)
          })

          //this might be very slow if alot of games
          for(const index in results){
            const result = results[index]
            let team1, team2;
            teams.forEach(team => {
              if(team.id === result.team1){
                team1 = team;
              }

              if (team.id === result.team2){
                team2 = team;
              }
            })

            if(!team1 || !team2){
              console.log(result.id)
              throw Error("No such team")
            }

            result.team1Uid = team1;
            result.team2Uid = team2;
            result.team1 = team1.name;
            result.team1Flag = team1.flag;
            result.team2 = team2.name;
            result.team2Flag = team2.flag;
            cleanedResult.push(result)
          }

          this.games = this.sortOnDate(cleanedResult);
          return Promise.resolve(cleanedResult)
        }catch(e) {
          Alert.alert("Something went wrong", e.message)
        }
      }
    }

    sortOnDate(events){
      events.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      return events
    }
};
