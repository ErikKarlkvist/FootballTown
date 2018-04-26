

import React, { Component } from 'react';
import {Button, AppRegistry,
Text, FlatList, View, StyleSheet,
Image, ActivityIndicator,
TouchableOpacity} from 'react-native';

import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Icon,ListItem,List,
Container,Content,
ScrollView
} from 'native-base'

import Factory from '../database/Factory';
import {Colors, Fonts} from '../config/UIConfig'
import {StackNavigator } from 'react-navigation';
import AdminHeaderButton from "../component/AdminHeaderButton"
export default class Matches_page extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      title: "Matches",
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
      const latest = []
      const upcoming = []
      games.forEach(game => {
        if(game.status === "pending"){
          upcoming.push(game)
        } else {
          latest.push(game)
        }
      })
      latest.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      upcoming.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      this.setState({loading: false, refreshing: false, upcoming, latest})
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

render() {
    console.log(this.props.navigation)
    if(!this.state.loading && this.state.fetchedgames != []) {
      return (
        <View style={{flex:1}}>
          <Text style={styles.headerTitle}>Upcoming Matches</Text>
          <FlatList
            data={this.state.upcoming}
            renderItem={({ item }) => (
              <GamesListItem navigation = {this.props.navigation} gamesStory = {item}/>
            )}
            keyExtractor={item => item.id}
            //ItemSeparatorComponent={this.renderSeparator}
            //ListHeaderComponent={this.renderHeader}
            //ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
          />
          <Text style={styles.headerTitle}>Latest Matches</Text>
          <FlatList
            data={this.state.latest}
            renderItem={({ item }) => (
              <GamesListItem navigation = {this.props.navigation} gamesStory = {item}/>
            )}
            keyExtractor={item => item.id}
            //ItemSeparatorComponent={this.renderSeparator}
            //ListHeaderComponent={this.renderHeader}
            //ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
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
  render() {
     return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Games_Details_Page", {game: this.props.gamesStory})} style={styles.gamesList}>
              <View style={styles.team}>
                <Text style={styles.team1Title}>{this.props.gamesStory.team1}</Text>
                <Image style={styles.image} source ={{uri: this.props.gamesStory.team1Flag}}/>
                <Text style={styles.scores1}>{this.props.gamesStory.goals1}</Text>
              </View>
              <Text style={styles.dash}>-</Text>
              <View style={styles.team}>
                <Text style={styles.scores2}>{this.props.gamesStory.goals2}</Text>
                <Image style={styles.image} source ={{uri: this.props.gamesStory.team2Flag}}/>
                <Text style={styles.team2Title}>{this.props.gamesStory.team2}</Text>
              </View>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10,
    color: Colors.PrimaryText
  },
  team1Title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
    maxWidth: 120,
    marginRight: 10,
    flex: 1,
    textAlign: "left"
  },
  team2Title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
    maxWidth: 120,
    marginRight: 10,
    flex: 1,
    textAlign: "right"
  },
  dash: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  gamesList:{
    padding: 10,
    backgroundColor: Colors.ListBackground,
    shadowColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 1,
    marginBottom: 1,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  scores1:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    minWidth: 20,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "right"
  },
  scores2:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    minWidth: 20,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "left"
  },
  image: {
    height: 35,
    width: 35,
    flex: 0.3
  },
  team: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5
  }
});
