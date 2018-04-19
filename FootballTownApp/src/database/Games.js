import firebase from "react-native-firebase"
import {Alert} from "react-native"
export default class Games {

    constructor(){
        this.games = []
    }

    addGames(tmpGame){

      const newGame = {
        team1: tmpGame.team1Uid,
        team2: tmpGame.team2Uid,
        goals1: tmpGame.goals1,
        goals2: tmpGame.goals2,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      }
      this.games.push(newGame);
      return firebase.firestore().collection("games").add(tmpGame)
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
        const games = await firebase.firestore().collection("games").get()

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
          let team1 = await firebase.firestore().collection("teams").doc(result.team1).get()
          let team2 = await firebase.firestore().collection("teams").doc(result.team2).get()

          team1 = team1.data()
          team2 = team2.data()

          result.team1Uid = team1;
          result.team2Uid = team2;
          result.team1 = team1.name;
          result.team1Flag = team1.flag;
          result.team2 = team1.name;
          result.team2Flag = team2.flag;
          cleanedResult.push(result)
        }

        this.games = cleanedResult;
        return Promise.resolve(cleanedResult)
      }
    }
};
