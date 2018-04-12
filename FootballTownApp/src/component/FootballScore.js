import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View } from 'react-native';
import MatchComponent from './MatchComponent';

export default class FootballScore extends Component {
  constructor(props) {
  	super(props);
    console.log(MatchComponent);

	this.state = {
		loading: false,
		teams: [],
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
             score1={item.score1} score2={item.score2} team1Image={item.team1Image} team2Image={item.team2Image} />
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

