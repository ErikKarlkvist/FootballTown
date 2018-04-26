import {NewsStory} from "../component/NewsComponent"
import Home_page from "../views/Home_page"
import {StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"
import AdminHeaderButton from "../component/AdminHeaderButton"

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
  Detail: { screen: NewsStory },
}, navigationConfig);




export default HomeStack;
