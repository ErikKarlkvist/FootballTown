import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View, StyleSheet, Image, ActivityIndicator, TouchableHighlight} from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';
import AdminHeaderButton from "./AdminHeaderButton";
import Events_page from "../views/Events_page";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons";
 export class EventComponent extends Component {

  constructor(props) {
  	super(props);

	this.state = {
		loading: false,
		page: 1,
		errors: null,
		refreshing: false,
    events: Factory.getEventsInstance(),
    fetchedEvents: [],
    navigator: props.navigator,
	};
  }

  componentDidMount(){
    this.setState({loading:true})
    this.state.events.getEvents().then((events) => {
      console.log(events)
      this.setState({loading: false, fetchedEvents: events})
    })
  }

  refresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      }
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
      <View>
      </View>
    );
  };

// Opens a newsarticle and gives it the newsarticle
  openEventsArticle(eventsArticle) {
    this.props.navigation.navigate('Details2',{eventsArticle})
  }

  render() {
      return (
        <View style={styles.eventsList}>
        <FlatList
          data={this.state.fetchedEvents}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => this.openEventsArticle(item)}>
            <EventsListItem title={item.title} location={item.location} price={item.price} text={item.text} image={item.imageUrl}/>
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReachedThreshold={50}
        />
        </View>
        );
    }
}
class EventsListItem extends Component {


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
}

  render() {
    return (
      <View style={styles.eventsStory}>
      <Image
        style={{width: 95, height: 85, marginTop: '2%'}}
        source={{uri: this.props.image}}
        />
        <View>
       <Text style={styles.eventsTitle}>{this.props.title}</Text>
       <Text style={styles.eventsText}>{this.getExceptText(110)} </Text>
       <Text style={styles.locationPriceText}> <Icon name='map-marker' size={15} style={{ marginLeft:'1%', color: "black" }}/> Location: {this.props.location}</Text>
       <Text style={styles.locationPriceText}> <Ionicons name='md-pricetags' size={13} style={{ marginLeft:'1%', color: "black" }}/> Price: {this.props.price}</Text>
       </View>
       </View>
    );
  }
}


export class EventsStory extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerColor: Colors.PrimaryDarkText,
      title: 'Event',
      headerTitle: 'Event',
    }
  };

  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Events_page eventsStory= {this.props.navigation.state.params.eventsArticle}/>
    );
  }
}


const styles = StyleSheet.create({
  eventsStory: {
    margin: 1,
    flex: 1, flexDirection: 'row',
    height: 100,
    width: '100%'
  },
  eventsTitle: {

    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  eventsText:{
  color: 'gray',
  marginLeft: '3%',
  fontSize: 12,
  },
  locationPriceText:{
  color: 'gray',
  marginLeft: '3%',
  fontSize: 13,
  color: Colors.PrimaryText,
  },
  eventsList:{
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

  }
});
