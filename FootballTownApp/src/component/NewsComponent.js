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
export class NewsComponent extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      headerRight: (
        <AdminHeaderButton navigation={navigation}/>
      ),
    }
  };

  constructor(props) {
  	super(props);
  	this.state = {
  		loading: false,
  		page: 1,
  		errors: null,
  		refreshing: false,
      news: Factory.getNewsInstance(),
      fetchedNews: [],
      navigator: props.navigator,
      itemCount: this.props.itemCount,
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

  // Render new items once the user presses the "More button"
  loadNewNewsArticle = () => {
    if (this.state.itemCount < this.state.fetchedNews.length) {
      this.setState((prevState) => ({ itemCount: (prevState.itemCount + 1) }));
    }
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
            <Text style={styles.newsTopBarTitle}>{this.props.title}</Text>
            {this.props.loadMessage != null?
              <View style={styles.loadMore}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.openNewsArticle(item)}
                >
                  <Text style={styles.loadText}>{this.props.loadMessage}</Text>
                  </TouchableOpacity>
              </View>: null }
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
            data={this.state.fetchedNews.slice(0, this.state.itemCount)}
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
            onEndReachedThreshold={50}
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
        <View style={styles.storyText}>
       <Text style={styles.newsTitle}>{this.props.newsStory.title}</Text>
       <Text style={styles.newsText}>{this.shortIngressText(this.props.newsStory.ingress,100)}</Text>
       </View>
       </View>
    );
  }
}


export class NewsStory extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTintColor: Colors.Primary,
      headerRight: (
        <AdminHeaderButton navigation={navigation}/>
      ),
    }
  };
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <News_page newsStory= {this.props.navigation.state.params.newsArticle}/>
    );
  }
}




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
  storyText: {
    flex: 1, flexDirection: 'column',
    paddingLeft: 2
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
    width: '100%'

  },
  newsTopBarTitle:{
    fontSize: 22,

  },
  newsTopbar: {
    flex: 1, flexDirection: 'row',
    height: '5%',
    margin: 0,
    padding: 5

  },
  loadMore: {
    marginLeft: 'auto',
    margin: 0,
    padding: 5,
    fontSize: 18,
  },
  loadText: {
    color: Colors.Primary,
  }

});
