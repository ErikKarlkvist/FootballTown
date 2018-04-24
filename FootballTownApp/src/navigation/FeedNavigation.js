import {EventComponent, EventsStory} from "../component/EventComponent"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import {NewsComponent, NewsStory} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';

const TabNav = TabNavigator(
{
  News: {screen: NewsComponent},
  Events: {screen: EventComponent},

});


const NewsStack = StackNavigator({
  NewsFeed: { screen: TabNav },
  Details2: {screen: EventsStory},
  Detail: { screen: NewsStory },
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
});



export default NewsStack;
