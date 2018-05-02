import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, Image } from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';





export default class TeamDesc extends Component {
  constructor(props) {
  	super(props);const Teams = Factory.getTeamsInstance();

    this.state = {
      loading: false,
      page: 1,
      errors: null,
      refreshing: false,
      user: Factory.getUserInstance(),
      fetchedTeam: null
    };
}

componentDidMount(){
  this.setState({loading: true})
  Factory.getUserInstance().setFollowingTeam("Mx7bWLt3BsrwWEX4XCDn")
  Factory.getUserInstance().getFollowingTeam().then((user) =>
  {console.log(user)})
  this.setState({
      loading: false,
      fetchedTeam: user,
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
  render() {
    return (

          data={this.state.fetchedTeam}
          <View> team={data.name} </View>
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
    );
  }
}
