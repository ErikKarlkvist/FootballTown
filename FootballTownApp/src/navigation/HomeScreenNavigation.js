import {NewsStory} from "../component/NewsComponent"
import Home_page from "../views/Home_page"
import {StackNavigator } from 'react-navigation';



const HomeStack = StackNavigator({
  HomeScreen: { screen: Home_page },
  Detail: { screen: NewsStory },
});



export default HomeStack;
