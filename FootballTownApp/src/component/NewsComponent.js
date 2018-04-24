import React, { Component } from 'react';
import {Button, AppRegistry, Text, FlatList, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig'
import {StackNavigator } from 'react-navigation';
import AdminHeaderButton from "./AdminHeaderButton"
import AdminAddEvents from "../views/AdminAddEvents"
import AdminAddGame from "../views/AdminAddGame"
import AdminAddNews from "../views/AdminAddNews"
import News_page from '../views/News_page'
class NewsComponent extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "News",
      headerRight: (
        <AdminHeaderButton navigation={navigation}/>
      ),
    }
  };

  constructor(props) {
  	super(props);
    console.log("Hello")
    console.log(this.props); 
  	this.state = {
  		loading: false,
  		page: 1,
  		errors: null,
  		refreshing: false,
      news: Factory.getNewsInstance(),
      fetchedNews: [],
      navigator: props.navigator,
  	};

  }

  componentDidMount(){
    this.refreshData()
  }

  refreshData = () =>{
    this.setState({loading:true})
    this.state.news.getNews().then((news) => {
      console.log(news)
      this.setState({loading: false, refreshing: false, fetchedNews: news})
    })
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      }
    );
    this.refreshData();
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          opacity: 0.2,
          backgroundColor: "gray",
        }}
      />
    );
  };
  renderHeader = () => {
    return(
      <View style={styles.newsTopbar}>
          <Text style={styles.newsTopBarTitle}>Title</Text>
          <View style={styles.loadMore}>
            <Button 
              onPress={this.refreshData}
              title={"More"}
              color={Colors.Primary}
            />
          </View>
      </View>
    );
  };

  renderFooter = () => {
    return (
      <View></View>
      );
  };

// Opens a newsarticle and gives it the newsarticle
  openNewsArticle(newsArticle) {
    this.props.navigation.navigate('Detail',{newsArticle});

  }

  render() {
    if(!this.state.loading && this.state.fetchedNews != []) {
      return (
        <View style={styles.newsList}>
          <FlatList
            data={this.state.fetchedNews}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.openNewsArticle(item)}>
                <NewsListItem newsStory = {item}/>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
            initialNumToRender={2}
          />
        </View>
        );
    } else {
      return(
        <ActivityIndicator size="large" color={Colors.Primary} />
        );
    }
    }
}

class NewsListItem extends Component {
  constructor(props) {
    super(props);
}

// Returns the news text to be shown for a given article
shortIngressText(ingress, length) {
  if(ingress < length) {
    return ingress
  } else {
    return (ingress.substring(0,length) + "...")
  }
}

  render() {
    return (
      <View style={styles.newsStory}>
      <Image
        style={{width: 70, height: 70}}
        source={{uri: this.props.newsStory.imageUrl}}
        />
        <View>
       <Text style={styles.newsTitle}>{this.props.newsStory.title}</Text>
       <Text style={styles.newsText}>{this.shortIngressText(this.props.newsStory.ingress,100)}</Text>
       </View>
       </View>
    );
  }
}


class NewsStory extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <News_page newsStory= {this.props.navigation.state.params.newsArticle}/>
    );
  }
}


// Main stacknavigator layout
export default StackNavigator({
  NewsFeed: { screen: NewsComponent },
  Detail: { screen: NewsStory },
  AdminAddGame: {screen: AdminAddGame},
  AdminAddEvents: {screen: AdminAddEvents},
  AdminAddNews: {screen: AdminAddNews},
});




const styles = StyleSheet.create({
  newsStory: {
    margin: 1,
    flex: 1, flexDirection: 'row',
    height: '10%',
    padding: 3,
    backgroundColor: Colors.ListBackground,
    shadowColor: '#000000',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    elevation: 1,

  },
  newsTitle: {
    marginTop: 5,
    paddingTop: 1,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  newsText:{
    color: 'gray',
    marginLeft: 2,
    fontSize: 12,
  },
  newsList:{
    padding: 10,

  },
  newsTopBarTitle:{
    fontSize: 22,

  },
  newsTopbar: {
    flex: 1, flexDirection: 'row',
    height: '5%',

  },
  loadMore: {
    marginLeft: 'auto',
  }

});
