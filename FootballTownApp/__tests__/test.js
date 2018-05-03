import 'react-native';
import React from 'react';
import App from '../App';
import RNFirebase from 'react-native-firebase'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Factory from "../src/database/Factory"

const Games = Factory.getGamesInstance();
const News = Factory.getNewsInstance();
const Events = Factory.getEventsInstance();
const Teams = Factory.getTeamsInstance();
const Users = Factory. getUserInstance();

RNFirebase.initializeApp()
RNFirebase.reset()


// Commenting out this for now.
// it('renders correctly', () => {
//   const tree = renderer.create(
//    <App />
//   );
// });
//testing for news
it('loads games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
  })
})

it('loads news correctly', () => {
  News.getNews().then((news) => {
    expect(news.length).toBe(0)
  })
})

it('add news correctly', () => {
  News.getNews().then((news) => {
    expect(news.length).toBe(0)
    const newNews = {
      title: 'Title',
      ingress: 'Ingress',
      text: 'Text',
      imageUrl: 'imageurl',
    }
    News.addNews(newNews)
    News.getNews().then(news => {
      expect(news.length).toBe(1)
    })
  })
})

it('remove news correctly', () => {
  News.getNews().then((news) => {
    expect(news.length).toBe(0)
    const newNews = {
      title: 'Title',
      ingress: 'Ingress',
      text: 'iadssijadoasdjoidas',
      imageUrl: 'koadsdsaokdsodsa',
    }
    News.addNews(newNews)
    News.getNews().then(news => {
      expect(news.length).toBe(1)
      const id = news[0].id
      News.removeNews(id)
      News.getNews().then(news => {
        expect(news.length).toBe(0)
      })
    })
  })
})
//testing for event
it('loads games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
  })
})
it('loads Events correctly', () => {
  Events.getEvents().then((Events) => {
    expect(Events.length).toBe(0)
  })
})
it('add Event correctly', () => {
  Events.getEvents().then((events) => {
    expect(events.length).toBe(0)
    const newEvent = {
      title: "title",
      teams: "teams",
      text: "text",
      location: "the location",
      price: "the price",
      imageUrl: "image source ",
      price: "the price of the event",
      date: "the date of the event",
      location: "the location of the event ",
    }
    Events.addEvent(newEvent)
    Events.getEvent().then(events => {
      expect(events.length).toBe(1)
    })
  })
})
it('Remove Event correctly', () => {
  Events.getEvents().then((events) => {
    expect(events.length).toBe(0)
    const newEvent = {
      title: "title",
      teams: "teams",
      text: "text",
      location: "the location",
      price: "the price",
      imageUrl: "image source ",
      price: "the price of the event",
      date: "the date of the event",
      location: "the location of the event ",
    }
    Events.addEvent(newEvent)
    Events.getEvent().then(events => {
      expect(events.length).toBe(1)
      const id = events[0].id
      Events.removeEvents(id)
      Events.getEvents().then(events => {
        expect(events.length).toBe(0)
      })
    })
  })
})
//testing for Gomes
it('loads games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
  })
})
it('add Games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
    const newGame = {
      team1: "team1",
      team2: "teams2",
      goals1: "goals1",
      goals2: "goals2",
      date: "date",
      status: "status",
      referee: "referee",
      text: "text",
    }
    Games.addGames(newGame)
    Games.getGames().then(games => {
      expect(games.length).toBe(1)
    })
  })
})
it('Remove Games correctly', () => {
  Games.getGames().then((games) => {
    expect(games.length).toBe(0)
    const newGame = {
      title: "title",
      teams: "teams",
      text: "text",
      location: "the location",
      price: "the price",
      imageUrl: "image source ",
      price: "the price of the event",
      date: "the date of the event",
      location: "the location of the event ",
    }
    Games.addGames(newGame)
  Games.getGames().then(games => {
      expect(games.length).toBe(1)
      const id = games[0].id
      Games.removeGames(id)
      Games.getGames().then(games => {
        expect(games.length).toBe(0)
      })
    })
  })
  })
// testing teams
it('loads Teams correctly', () => {
  Teams.getTeams().then((teams) => {
    expect(teams.length).toBe(0)
  })
})

it('add Teams correctly', () => {
  Teams.getTeams().then((teams) => {
    expect(teams.length).toBe(0)
    const newTeams = {
      name: "name",
      flag:"flag",
      points:"points",
    }
    Teams.addTeam(newTeams)
    Teams.getTeams().then(teams => {
      expect(teams.length).toBe(1)
    })
  })
})

it('remove Teams correctly', () => {
Teams.getTeams().then((teams) => {
    expect(teams.length).toBe(0)
    const newTeams = {
      name: "name",
      flag:"flag",
      points:"points",
    }
  Teams.addTeam(newTeams)
    Teams.getTeams().then(teams => {
      expect(teams.length).toBe(1)
      const id = teams[0].id
    Teams.removeTeam(id)
    Teams.getTeams().then(teams => {
        expect(teams.length).toBe(0)
      })
    })
  })
})
//

it('updateteam Teams correctly', () => {
Teams.getTeams().then((teams) => {
    expect(teams.length).toBe(0)
    const newTeams = {
      name: "name",
      flag:"flag",
      points:"points",
    }
  Teams.addTeam(newTeams)
    Teams.getTeams().then(teams => {
      expect(teams.length).toBe(1)
      const id = teams[0].id
    Teams.removeTeam(id)
    Teams.getTeams().then(teams => {
        expect(teams.length).toBe(0)
        Teams.updateTeam(id)
        Teams.getTeams().then(teams => {
            expect(teams.length).toBe(1)

      })
    })
  })
})
})
