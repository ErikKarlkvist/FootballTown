import {EventComponent, EventsStory} from "../component/EventComponent"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import Admin from "../views/Admin"
import {NewsComponent, NewsStory} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Colors} from "../config/UIConfig"

const TabNav = TabNavigator(
{
  News: {screen: NewsComponent},
  Events: {screen: EventComponent},

},{
tabBarPosition:'top',
 animationEnabled: true,
 swipeEnabled: true,
 tabBarOptions: {
   style: {
    backgroundColor: Colors.Primary,
   },
    labelStyle:{
               fontWeight: 'bold',
               },
    activeTintColor: Colors.PrimaryDarkText,
    inactiveTintColor: Colors.PrimaryDarkText2
}});


const NewsStack = StackNavigator({
  NewsFeed: { screen: TabNav },
  Details2: {screen: EventsStory},
  Detail: { screen: NewsStory },
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
  Admin: {screen: Admin}
});



export default NewsStack;
