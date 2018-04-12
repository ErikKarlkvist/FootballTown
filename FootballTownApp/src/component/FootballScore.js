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
    games: Factory.getGamesInstance()
	};

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
          data={this.state.games.getGames()}
          renderItem={({ item }) => (
            <MatchComponent team1={item.hometeam} team2={item.awayteam}
             score1={item.homeScore} score2={item.awayScore} team1Image={item.team1Image} team2Image={item.team2Image} />
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

