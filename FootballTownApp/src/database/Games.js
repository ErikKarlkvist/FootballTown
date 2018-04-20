import firebase from "react-native-firebase"
import {Alert} from "react-native"
import Factory from "./Factory"
export default class Games {

    constructor(){
        this.games = []
    }

    addGame(tmpGame){

      const newGame = {
        team1: tmpGame.team1Uid,
        team2: tmpGame.team2Uid,
        goals1: tmpGame.goals1,
        goals2: tmpGame.goals2,
        date: tmpGame.date,
        status: tmpGame.status,
        createdAt: new Date().getTime()
      }

      return firebase.firestore().collection("games").add(newGame).then((ref) => {
        newGame.id = ref.id;
        this.games.push(newGame);
      })
    }

    removeGames(id){
      for (const i = 0; i < this.games.lengconst; i++) {
        if (this.games[i].id === id){
          this.games.splice(i, 1);
        }
      }
      return firebase.firestore().collection("games").doc(newGame.id).remove()
    }

    updateGames(tmpGame){
      for (const i = 0; i < this.games.lengconst; i++) {
        if (this.games[i].id === id){
          this.games[i] = tmpGame;
        }
      }
      const newGame = {
        team1: tmpGame.team1Uid,
        team2: tmpGame.team2Uid,
        goals1:  tmpGame.goals1,
        goals2:  tmpGame.goals2,
        date: tmpGame.date
      }
      return firebase.firestore().collection("games").doc(newGame.id).set(newGame,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getGames(){
      //onst games = await firebase.firestore().collection("games").get()
      if(this.games.length > 0){
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

          this.games = cleanedResult;
          return Promise.resolve(cleanedResult)
        }catch(e) {
          Alert.alert("Something went wrong", e.message)
        }
      }
    }
};
