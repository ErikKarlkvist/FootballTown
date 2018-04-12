import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View, StyleSheet, Image } from 'react-native';
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
    news: Factory.getNewsInstance()
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
          height: 1,
          width: "100%",
          backgroundColor: "#FFF",
        }}
      />
    );
  };

  renderHeader = () => {
    return <Text style={styles.listTitle}>Recent News</Text>;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
      </View>
    );
  };

  render() {
    console.log(this.state.game)
    return (
        <FlatList
          data={this.state.news.getNews()}
          renderItem={({ item }) => (
            <NewsStory title={item.title} text={item.text} />
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
    );
  }
}
class NewsStory extends Component {
  constructor(props) {
    super(props);

}

// Returns the news text to be shown for a given article
getExceptText() {
  if(this.props.except != null) {
    return this.props.except;
  } else if(this.props.text.length < 200) {
    return this.props.text
  } else {
    return (this.props.text.substring(0,200) + "...")
  }
}

  render() {
    return (
      <View style={styles.newsStory}>
       <Text style={styles.newsTitle}>{this.props.title}</Text>
       <Text style={styles.newsText}>{this.getExceptText()}</Text>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  listTitle: {
    marginTop: '6%',
    textAlign: 'center',
    fontSize: 22,
    backgroundColor: Colors.Primary,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: Colors.PrimaryDark,
  },
  newsStory: {
    alignItems: 'center',
    backgroundColor: Colors.CardBackground,
  },
  newsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.PrimaryText
  },
  newsText:{
  color: 'gray',
  fontSize: 12,
  padding: '4%',
  textAlign: 'left'
  }
});
