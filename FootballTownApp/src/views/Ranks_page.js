
import React, { Component } from 'react';
import {Button, AppRegistry,
Text, FlatList, View, StyleSheet,
Image, ActivityIndicator,
TouchableHighlight} from 'react-native';

import {Card,CardItem,
Thumbnail,Body,
Left,Right,
Icon,ListItem,List,
Container,Content,
ScrollView
} from 'native-base'

import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig'
import {StackNavigator } from 'react-navigation';

export default class Ranks_page extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Ranks",
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
      ranks: Factory.getTeamsInstance(),
      fetchedteams: [],
      navigator: props.navigator,
  	};

  }

  componentDidMount(){
    this.refreshData()
  }

  refreshData() {
    this.setState({loading:true})
    this.state.ranks.getTeams().then((ranks) => {
      console.log(ranks)
      this.setState({loading: false, refreshing: false, fetchedteams:ranks})
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
    if(!this.state.loading && this.state.fetchedteams!= []) {
      return (
        <View>
           <Text style={styles.gamesTitle}>Current Ranks</Text>
        <FlatList
          data={this.state.fetchedteams}
          renderItem={({ item }) => (
            <TeamsListItem TeamsStory = {item}/>
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
      return(
        <ActivityIndicator size="large" color={Colors.Primary} />
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
        <Card>
            <CardItem cardBody style={{height:80,width:null,flex:1}}>
                <Text style={styles.gamesTitle}>1</Text>
                <Thumbnail source ={{uri: this.props.TeamsStory.flag}}/>
                <Text style={styles.gamesTitle}>{this.props.TeamsStory.name}</Text>
                <Text style={styles.scores}>{this.props.TeamsStory.points}</Text>
            </CardItem>
       </Card>




    );
  }
}

const styles = StyleSheet.create({
  gamesStory: {
    margin: 1,
    flex: 1, flexDirection: 'row',
    height: '10%',
  },
  gamesTitle: {
    marginTop: 5,
    marginLeft: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText
  },
  gamesText:{
  color: 'gray',
  marginLeft: 2,
  fontSize: 12,
  },
  gamesList:{
    padding: 10,
    backgroundColor: Colors.ListBackground,
    shadowColor: '#000000',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,

  },
  scores:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row'
    }
});
