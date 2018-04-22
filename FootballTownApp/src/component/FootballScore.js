import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View } from 'react-native';
import MatchComponent from './MatchComponent';
import Factory from '../database/Factory'

export default class FootballScore extends Component {
  constructor(props) {
  	super(props);const Games = Factory.getGamesInstance();

	this.state = {
		loading: false,
		page: 1,
		errors: null,
		refreshing: false,
    games: Factory.getGamesInstance(),
    fetchedGames: []
	};

  }

  componentDidMount(){
    this.setState({loading: true})
    this.state.games.getGames().then((games) => {
      this.setState({
        loading: false,
        fetchedGames: games,
      })
    })
  }

  refresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      }
      // Fetch more data
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
    return <Text>Matches</Text>;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "purple"
        }}
      >
      </View>
    );
  };

  render() {
    return (
        <FlatList
          data={this.state.fetchedGames}
          renderItem={({ item }) => (
            <MatchComponent team1={item.team1} team2={item.team2}
             score1={item.goals1} score2={item.goals2} team1Flag={item.team1Flag} team2Flag={item.team2Flag} />
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
