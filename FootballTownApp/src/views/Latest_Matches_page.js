

import React, { Component } from 'react';
import {Button, AppRegistry,
Text, FlatList, View, StyleSheet,
Image, ActivityIndicator,
TouchableOpacity} from 'react-native';
import Factory from '../database/Factory';
import {Colors, Fonts} from '../config/UIConfig'
import {StackNavigator, withNavigation} from 'react-navigation';
import AdminHeaderButton from "../component/AdminHeaderButton"
class Latest_Matches_page extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      title: "Latest Matches",
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
      latest: [],
  	};

  }

  componentDidMount(){
    this.refreshData()
  }

  refreshData() {
    this.setState({loading:true})
    this.state.games.getGames(true).then((games) => {
      const lat = []
      games.forEach(game => {
        if(game.status !="pending"){
          lat.push(game)
        }
      })
      lat.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });

      this.setState({loading: false, refreshing: false,latest: lat})
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
    renderHeader = () => {
      return(
        <View style={styles.gamesTopbar}>
            <Text style={styles.gamesTopbarTitle}>Latest Matches</Text>
            {this.props.loadMessage != null?
              <View style={styles.loadMore}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.goToMatchesPage()}
                >
                  <Text style={styles.loadText}>{this.props.loadMessage}</Text>
                  </TouchableOpacity>
              </View>: null }
        </View>
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

goToMatchesPage = () => {
  {this.props.navigation.navigate('Games', {refresh:this.handleRefresh})}
}
render() {
    console.log(this.props.navigation)
    if(!this.state.loading && this.state.fetchedgames != []) {
      return (
        <View style={{flex:1}}>
          <FlatList
            data={this.state.latest.slice(0, this.props.itemCount)}
            renderItem={({ item }) => (
              <GamesListItem navigation = {this.props.navigation} gamesStory = {item}/>
            )}
            keyExtractor={item => item.id}

            //ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
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
export default withNavigation(Latest_Matches_page);

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
    flex: 0.3,
    resizeMode: 'contain',
  },
  team: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5
  },
  gamesTopbarTitle:{
    fontSize: 22,

  },
  gamesTopbar: {
    flex: 1, flexDirection: 'row',
    height: '5%',
    margin: 0,
    padding: 10,

  },
  loadMore: {
    marginLeft: 'auto',
    margin: 0,
    padding: 5

  },
  loadText: {
    color: Colors.Primary,
  }
});
