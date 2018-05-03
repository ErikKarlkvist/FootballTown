import {NewsStory} from "../component/NewsComponent"
import Home_page from "../views/Home_page"
import {StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import AdminAddPlayer from "../views/AdminAddPlayer"
import AdminAddTeam from "../views/AdminAddTeam"
import Admin from "../views/Admin"
import News_page from "../views/News_page"

const navigationConfig = {
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


const HomeStack = StackNavigator({
  HomeScreen: { screen: Home_page },
  Detail: { screen: News_page },
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
  AdminAddPlayer: {screen: AdminAddPlayer},
  AdminAddTeam: {screen: AdminAddTeam},
  Admin: {screen: Admin}
}, navigationConfig);




export default HomeStack;
