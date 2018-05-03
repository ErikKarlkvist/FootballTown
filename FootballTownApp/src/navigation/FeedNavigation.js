import {EventComponent, EventsStory} from "../component/EventComponent"
import AdminHeaderButton from "../component/AdminHeaderButton"
import {NewsComponent} from "../component/NewsComponent"
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"
import AdminAddNews from "../views/AdminAddNews"
import AdminAddEvents from "../views/AdminAddEvents"
import News_page from "../views/News_page"

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
  Detail: { screen: News_page },
  AdminAddNews: {screen: AdminAddNews},
  AdminAddEvents: {screen: AdminAddEvents}
}, navigationConfig);



export default NewsStack;
