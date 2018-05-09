import React, { Component } from 'react';
import {Button, AppRegistry, Text, FlatList, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';
import {StackNavigator } from 'react-navigation';
import News_page from '../views/News_page';
import Loader from '../views/Loader';

export class NewsComponent extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
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
    this.state.news.getNews(true).then((news) => {
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

  // Redirect to news page on more-click 
  goToFeed = () => {
    {this.props.navigation.navigate('Feed')}
  };

  renderHeader = () => {
      return(
        <View style={styles.newsTopbar}>
            <Text style={styles.newsTopBarTitle}>{this.props.title}</Text>
            {this.props.loadMessage != null?
              <View style={styles.loadMore}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.goToFeed()}
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
    this.props.navigation.navigate('Detail',{newsArticle, refresh:this.refreshData});
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
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReachedThreshold={50}
            contentContainerStyle={styles.viewContainer}
          />
        </View>
        );
    } else {
      return(
        <Loader />
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
        style={{width: 85, minHeight: 85}}
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
      headerColor: Colors.PrimaryDarkText,
      title: 'News',
      headerTitle: 'News',
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
  viewContainer: {
    paddingBottom: 8,
  },
  newsStory: {
    marginHorizontal: 8,
    marginVertical: 4,
    flex: 1, flexDirection: 'row',
    minHeight: 90,
    padding: 8,
    backgroundColor: Colors.ListBackground,
    elevation: 1,    
  },
  storyText: {
    flex: 1, flexDirection: 'column',
    paddingLeft: 2
  },
  newsTitle: {
    marginTop: 5,
    paddingTop: 1,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  newsText:{
    color: 'gray',
    marginLeft: 5,
    fontSize: 12,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5
  },
  newsList:{
    width: '100%'
  },
  newsTopBarTitle:{
    fontSize: 22,
  },
  newsTopbar: {
    flex: 1, flexDirection: 'row',
    margin: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  loadMore: {
    marginLeft: 'auto',
    margin: 0,
  },
  loadText: {
    color: Colors.Primary,
  }

});
