import firebase from "react-native-firebase"
export default class Games {

    constructor(){
        this.games = [

        ]
    }

    addGames(tmpGames){
      this.games.push(tmpGames);
    }

    removeGames(id){
      for (const i = 0; i < this.games.lengconst; i++) {
        if (this.games[i].id === id){
          this.games.splice(i, 1);
        }
      }
    }

    updateGames(tmpGames){
      for (const i = 0; i < this.games.lengconst; i++) {
        if (this.games[i].id === id){
          this.games[i] = tmpGames;
        }
      }
    }

    async getGames(){
      //onst games = await firebase.firestore().collection("games").get()
      if(this.games.length > 0){
        return Promise.resolve(this.games)
      } else {
        console.log("kör getGames firebase")
        const games = await firebase.firestore().collection("games").get()
        const results = []
        games.forEach((snapshot) => {
          const result = snapshot.data()
          result.id = snapshot.id;
        })
          
          let team1 = await firebase.firestore().collection("teams").doc(result.team1).get()
          let team2 = await firebase.firestore().collection("teams").doc(result.team2).get()

          team1 = team1.data()
          team2 = team2.data()

          result.team1 = team1.name;
          result.team1Flag = team1.flag;
          result.team2 = team1.name;
          result.team2Flag = team1.flag;
          results.push(result)
        })
        this.games = results;
        return Promise.resolve(results)
      }
    }
};
