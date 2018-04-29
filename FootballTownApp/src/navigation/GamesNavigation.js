import {EventComponent, EventsStory} from "../component/EventComponent"
import Matches_page from "../views/Matches_page"
import Ranks_page from'../views/Ranks_page';
import {NewsComponent, NewsStory} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"
import Game_Details_Page from "../views/Game_Details_page"
const TabNav = TabNavigator(
{
  News: {screen: Matches_page},
  Events: {screen: Ranks_page},

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

const navigationConfig = {
  initialRouteName: 'NewsFeed',
  navigationOptions: {
    headerStyle:{
      backgroundColor: Colors.Primary,
    },
    headerTitleStyle: {
      color: Colors.PrimaryDarkText,
      fontFamily: Fonts.Default,
    },
    headerTintColor: "white",

  }
}

const NewsStack = StackNavigator({
  NewsFeed: { screen: TabNav },
  Games_Details_Page: {screen: Game_Details_Page},
},navigationConfig);



export default NewsStack;
