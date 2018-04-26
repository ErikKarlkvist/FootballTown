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

RNFirebase.initializeApp()
RNFirebase.reset()


// Commenting out this for now.
// it('renders correctly', () => {
//   const tree = renderer.create(
//    <App />
//   );
// });

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
      text: 'iadssijadoasdjoidas',
      imageUrl: 'koadsdsaokdsodsa',
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
