/* import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, Image } from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';
import Team_page from "../views/Team_page";

export default class TeamDesc extends Component {
  constructor(props) {
  	super(props);
    //const Teams = Factory.getTeamsInstance();

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
    //Factory.getUserInstance().setFollowingTeam("Mx7bWLt3BsrwWEX4XCDn")
    Factory.getUserInstance().getFollowingTeam().then((team) => {
      this.setState({
        loading: false,
        fetchedTeam: team,
      })
      console.log(user)
    })
  }

  render() {
    return (
        <View><Text>{this.state.fetchedTeam.name}</Text></View>
    );
  }
}
*/
