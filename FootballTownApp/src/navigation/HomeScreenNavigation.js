import {NewsStory} from "../component/NewsComponent"
import Home_page from "../views/Home_page"
import {StackNavigator } from 'react-navigation';
import {Colors, Fonts} from "../config/UIConfig"



const HomeStack = StackNavigator({
  HomeScreen: { screen: Home_page,
    navigationOptions: ({ navigation }) => ({
      title: 'Football Town',
      headerTitle: 'Football Town',
      headerStyle:{
        backgroundColor: Colors.Primary,
      },
      headerTitleStyle: {
        color: Colors.PrimaryDarkText,
        fontFamily: Fonts.Default,
        
      }
    })},
  Detail: { screen: NewsStory },
  
});



export default HomeStack;