import {EventComponent, EventsStory} from "../component/EventComponent"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import Admin from "../views/Admin"
import Matches_page from "../views/Matches_page"
import RanksComponent from'../component/RanksComponent';
import {NewsComponent, NewsStory} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Colors} from "../config/UIConfig"
import Game_Details_Page from "../views/Game_Details_page"
const TabNav = TabNavigator(
{
  News: {screen: Matches_page},
  Events: {screen: RanksComponent},

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
  Games_Details_Page: {screen: Game_Details_Page},
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
  Admin: {screen: Admin}
});



export default NewsStack;
