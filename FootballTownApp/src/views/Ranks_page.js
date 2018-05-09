
import React, { Component } from 'react';
import {
  Button, AppRegistry,
  Text, FlatList, View, StyleSheet,
  Image, ActivityIndicator,
  TouchableHighlight, ScrollView
} from 'react-native';

import {
  Card, CardItem,
  Thumbnail, Body,
  Left, Right,
  Icon, ListItem, List,
  Container, Content,
} from 'native-base'

import Factory from '../database/Factory';
import { Colors, Fonts } from '../config/UIConfig';
import { GlobalStyles } from '../config/UIStyleSheet';
import { StackNavigator } from 'react-navigation';

export default class Ranks_page extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      headerTitle: "Ranks",
      title: "Ranks"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      page: 1,
      errors: null,
      refreshing: false,
      ranks: Factory.getTeamsInstance(),
      fetchedteams: [],
      navigator: props.navigator,
    };

  }

  componentDidMount() {
    this.refreshData()
  }

  refreshData() {
    this.setState({ loading: true })
    this.state.ranks.getTeams().then((ranks) => {
      ranks.sort(function (a, b) {
        return (a.rank) - (b.rank);
      });

      this.setState({ loading: false, refreshing: false, fetchedteams: ranks })
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          opacity: 0.2,
          backgroundColor: Colors.Background,
        }}
      />
    );
  };


  render() {
    if (!this.state.loading && this.state.fetchedteams != []) {
      return (
        <View>
          <FlatList
            data={this.state.fetchedteams.slice(0, this.props.itemCount)}
            contentContainerStyle={styles.viewContainer}
            renderItem={({ item }) => (
              <TeamsListItem TeamsStory={item} />
            )}
            keyExtractor={item => item.id}
            //ItemSeparatorComponent={this.renderSeparator}
            //ListHeaderComponent={this.renderHeader}
            //ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      );
    }
  }
}

class TeamsListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.TeamsStory)
    return (

      <View style={styles.rankContainer}>
        <View style={styles.positionContainer}>
          <Text style={styles.positionNumber}>{this.props.TeamsStory.rank}</Text>
        </View>
        <View style={styles.teamImageContainer}>
          <Image resizeMode="contain" style={styles.teamImage} source={{ uri: this.props.TeamsStory.flag }} />
        </View>
        <View style={styles.teamNameContainer}>
          <Text style={styles.teamName}>{this.props.TeamsStory.name}</Text>
        </View>
        <View style={styles.teamPointsContainer}>
          <Text style={styles.teamPoints}>{this.props.TeamsStory.points} pts</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingVertical: 8,
  },
  rankContainer: {
    margin: 4,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.CardBackground,
    elevation: 1,
  },
  positionContainer: {
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  teamNameContainer: {
    flex: 4,
    paddingLeft: 0,
    padding: 8,
    justifyContent: 'center',

  },
  teamName: {
    fontWeight: 'bold',
    color: Colors.PrimaryText,
    fontSize: 16,
  },
  teamImageContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  teamPointsContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    maxWidth: 64,
  },
  teamImage: {
    height: undefined,
    width: undefined,
    maxHeight: 56,
    minHeight: 44,
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
