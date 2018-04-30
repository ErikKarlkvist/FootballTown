import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, Image } from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';



export default class FootballScore extends Component {
  constructor(props) {
  	super(props);const Teams = Factory.getTeamsInstance();

    this.state = {
      loading: false,
      page: 1,
      errors: null,
      refreshing: false,
      team: Factory.getTeamsInstance(),
      fetchedTeam: null
    };
}

componentDidMount(){
  this.setState({loading: true})
  this.state.team.getTeams().then((team) => {
    this.setState({
      loading: false,
      fetchedTeam: team,
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


  render() {
    return (

          data={this.state.fetchedTeam}
          renderItem={({ item }) => (
            <View> team={item.name} </View>
          )}
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

  class ShowTeamView extends Component {


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
  } */

  /*  render() {
      return (

        <Image
        style={{width: screenWidth, height: imageHeight}}
        source={{uri: tempImage}}/>

          <View>
         <Text >{this.props.name}</Text>
         </View>

      );
    }
  }
