import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig'


export default class NewsComponent extends Component {
  constructor(props) {
  	super(props);

	this.state = {
		loading: false,
		page: 1,
		errors: null,
		refreshing: false,
    news: Factory.getNewsInstance(),
	};

  }

  refresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
        // Fetch more data
      
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

  renderFooter = () => {
    if (this.state.loading || this.state.refreshing) {
      return (
        <View style={{marginTop: 5, flex: 1}}>
      <ActivityIndicator size="large" color={Colors.Primary} />
      </View>
      );
    }
    else
    return (
      <View style={{marginTop: 5, flex: 1,
    justifyContent: 'flex-end'}}>
      
      <Text>More</Text>
      </View>
    );
  };

  render() {
    console.log(this.state.game)
      return (
        <View style={styles.newsList}>
        <FlatList
          data={this.state.news.getNews()}
          renderItem={({ item }) => (
            <NewsStory title={item.title} text={item.text} image={item.image}/>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
        </View>
        );
  }
}
class NewsStory extends Component {
  constructor(props) {
    super(props);

}

// Returns the news text to be shown for a given article
getExceptText(length) {
  if(this.props.except != null) {
    return this.props.except;
  } else if(this.props.text.length < length) {
    return this.props.text
  } else {
    return (this.props.text.substring(0,length) + "...")
  }
}

  render() {
    return (
      <View style={styles.newsStory}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <View>
       <Text style={styles.newsTitle}>{this.props.title}</Text>
       <Text style={styles.newsText}>{this.getExceptText(100)}</Text>
       </View>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  newsStory: {
    margin: 1,
    flex: 1, flexDirection: 'row',
    height: 50,
    width: '100%'
  },
  newsTitle: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText
  },
  newsText:{
  color: 'gray',
  marginLeft: '3%',
  fontSize: 12,
  },
  newsList:{
    padding: 10,
    backgroundColor: Colors.ListBackground,
    shadowColor: '#000000',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,

  }
});
