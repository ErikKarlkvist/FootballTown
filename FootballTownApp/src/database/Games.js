export default class Games {

    constructor(){
        this.games = [
            {
                id: "00001",
                hometeam: "Arsenal",
                awayteam: "Manchester United",
                homeScore: "0",
                awayScore: "3",
                homeImage: "",
                awayImage: ""
            },
            {
                id: "00002",
                hometeam: "Liverpool",
                awayteam: "Manchester City",
                homeScore: "0",
                awayScore: "3",
                homeImage: "",
                awayImage: ""
            },
            {
                id: "00003",
                hometeam: "Tottenham",
                awayteam: "Chelsea",
                homeScore: "",
                awayScore: "",
                homeImage: "",
                awayImage: ""
            }
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

    getGames(){
      return this.games;
    }
};
