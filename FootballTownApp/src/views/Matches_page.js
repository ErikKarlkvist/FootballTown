

import React, { Component } from 'react';
import {Button, AppRegistry,
Text, FlatList, View, StyleSheet,
Image, ActivityIndicator,
TouchableHighlight} from 'react-native';

import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Icon,ListItem,List,
Container,Content
} from 'native-base'

import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig'
import {StackNavigator } from 'react-navigation';

export default class Matches_page extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Matches",
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
      games: Factory.getGamesInstance(),
      fetchedgames: [],
      navigator: props.navigator,
  	};

  }

  componentDidMount(){
    this.refreshData()
  }

  refreshData() {
    this.setState({loading:true})
    this.state.games.getGames().then((games) => {
      console.log(games)
      this.setState({loading: false, refreshing: false, fetchedgames:games})
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
    return (
      <View style={{marginTop: 5, flex: 1,
    justifyContent: 'flex-end'}}>

      <Text>More</Text>
      </View>
    );
  };

// Opens a newsarticle and gives it the newsarticle
 /*openNewsArticle(newsArticle) {
    this.props.navigation.navigate('Detail',{newsArticle});

  }
*/

render() {
    if(!this.state.loading && this.state.fetchedgames != []) {
      return (
        <View style={styles.gamesList}>
        <FlatList
          data={this.state.fetchedgames}
          renderItem={({ item }) => (
            //<TouchableHighlight onPress={() => this.openNewsArticle(item)}>
            <GamesListItem gamesStory = {item}/>
            //</TouchableHighlight>
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
    } else {
      return(
        <ActivityIndicator size="large" color={Colors.Primary} />
        );
    }
    }
}

class GamesListItem extends Component {
  constructor(props) {
    super(props);
}

// Returns the news text to be shown for a given article
/*shortIngressText(ingress, length) {
  if(ingress < length) {
    return ingress
  } else {
    return (ingress.substring(0,length) + "...")
  }
}
*/

  render() {
    console.log(this.props.gamesStory)
    return (
      <View style={styles.gamesStory}>
        <Thumbnail source ={require('./ball.jpg')}/>
        <View>
       <Text style={styles.gamesTitle}>{this.props.gamesStory.team1}</Text>
       <Text style={styles.scores}>{this.props.gamesStory.goals1}</Text>




       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  gamesStory: {
    margin: 1,
    flex: 1, flexDirection: 'row',
    height: '10%',
  },
  gamesTitle: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText
  },
  gamesText:{
  color: 'gray',
  marginLeft: 2,
  fontSize: 12,
  },
  gamesList:{
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

  },
  scores:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
    }
});
