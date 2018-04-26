import {EventComponent, EventsStory} from "../component/EventComponent"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import Admin from "../views/Admin"
import AdminHeaderButton from "../component/AdminHeaderButton"
import {NewsComponent, NewsStory} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"

const TabNav = TabNavigator(
{
  News: {screen: NewsComponent},
  Events: {screen: EventComponent,
    navigationOptions: ({ navigation }) => ({
      title: 'Events',
      headerTitle: 'Events',
      header: null,
    })},
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
  NewsFeed: { screen: TabNav ,
  navigationOptions: ({ navigation }) => ({
    title: 'Feed',
    headerTitle: 'Feed',
  })},
  Details2: {screen: EventsStory},
  Detail: { screen: NewsStory },
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
  Admin: {screen: Admin}
}, navigationConfig);



export default NewsStack;
