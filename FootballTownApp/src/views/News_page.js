import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Alert
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';
import Button from "../component/Button"
import Factory from "../database/Factory"
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;


class News_page extends Component{
  static navigationOptions = ({navigation}) => {
    return {
      headerColor: Colors.PrimaryDarkText,
      title: 'News',
      headerTitle: 'News',
    }
  };
constructor(props){
  super(props);
  this.state = {
    user: Factory.getUserInstance(),
    news: Factory.getNewsInstance(),
    newsStory: props.navigation.state.params.newsArticle
  }
}

render() {
    return (
      <ScrollView style={GlobalStyles.articleScrollView}>
        <Image
          style={{width: screenWidth, height: imageHeight}}
          source={{uri: this.state.newsStory.imageUrl}}
        />
        <View style={GlobalStyles.articleContainer}>
          <Text style={GlobalStyles.title}>{this.state.newsStory.title}</Text>
          <Text style={GlobalStyles.ingress}>{this.state.newsStory.ingress}</Text>
          <Text style={GlobalStyles.text}>{this.state.newsStory.text}</Text>
        </View>
        {this.state.user.getIsAdmin() && <View style={{flexDirection: "row", margin: 20}}>
          <Button buttonStyle={{flex: 1, backgroundColor:Colors.Primary, marginRight: 10}} title={"Edit"} onPress={this.edit}/>
          <Button buttonStyle={{flex: 1, backgroundColor:Colors.Warning, marginLeft: 10}} title={"Delete"} onPress={this.initDelete}/>
        </View>}
      </ScrollView>
    );
  }

  initDelete = () => {
    Alert.alert(
      "You are about to delete the article",
      "Are you sure you want to proceed?",
      [
        {text:"Cancel", onPress: () => {}},
        {text:"Yes, delete it", onPress: this.delete}
      ]
    )
  }

  delete = () => {
    this.state.news.removeNews(this.state.newsStory.id)
    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
  }

  edit = () => {
    this.props.navigation.navigate("AdminAddNews", {newsStory: this.state.newsStory, refresh: this.refresh})
  }

  refresh = (newsStory) => {
    this.props.navigation.state.params.refresh()
    this.setState({newsStory})
  }
}

export default News_page;
