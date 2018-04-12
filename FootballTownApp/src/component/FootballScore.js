import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View } from 'react-native';
import MatchComponent from './MatchComponent';

export default class FootballScore extends Component {
  constructor(props) {
  	super(props);
    console.log(MatchComponent);

	this.state = {
		loading: false,
		teams: [{id: 1, team1: "Juventus", team2: "Malmö FF", score1:10, score2:0, team1Image:'http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/72/22220-cat-face-icon.png',team2Image:'http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/72/22266-chicken-icon.png'},{id: 2, team1: "Juventus", team2: "Malmö FF", score1:10, score2:0}],
		page: 1,
		errors: null,
		refreshing: false
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
    return (
        <FlatList
          data={this.state.teams}
          renderItem={({ item }) => (
            <MatchComponent team1={item.team1} team2={item.team2}
             score1={item.score1} score2={item.score2} team1Image={item.team1Image} team2Image={item.team1Image} />
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

