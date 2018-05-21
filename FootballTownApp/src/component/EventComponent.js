import React, { Component } from 'react';
import {AppRegistry, Text, FlatList, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity} from 'react-native';
import Factory from '../database/Factory';
import {Colors} from '../config/UIConfig';
import AdminHeaderButton from "./AdminHeaderButton";
import Events_page from "../views/Events_page";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons";
import Loader from '../views/Loader';

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
    this.refresh();
  }

  refresh = () => {
    this.setState({loading:true})
    this.state.events.getEvents(true).then((events) => {
      console.log(events)
      this.setState({loading: false, refreshing:false, fetchedEvents: events})
    })
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
        // Fetch more data
    );
  };

  renderFooter = () => {
    return (
      <View>
      </View>
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      }
    );
    this.refresh();
  };

// Opens a newsarticle and gives it the newsarticle
  openEventsArticle(eventsArticle) {
    this.props.navigation.navigate('Details2',{eventsArticle, refresh:this.refresh})
  }

  render() {
      if(!this.state.loading){
        return (
          <View style={styles.eventsList}>
          <FlatList
            data={this.state.fetchedEvents}
            renderItem={({ item }) => (
              <TouchableOpacity  onPress={() => this.openEventsArticle(item)}>
              <EventsListItem title={item.title} location={item.location} price={item.price} text={item.text} image={item.imageUrl}/>
              </TouchableOpacity >
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={this.renderFooter}
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReachedThreshold={50}
            contentContainerStyle={styles.viewContainer}
          />
          </View>
          );
      }else {
        return (
          <Loader />
        )
      }
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
        style={{width: 105, minHeight: 85}}
        source={{uri: this.props.image}}
        />
        <View style ={styles.storyText}>
         <Text style={styles.eventsTitle}>{this.props.title}</Text>
         <Text style={styles.eventsText}>{this.getExceptText(100)} </Text>
         <Text style={styles.iconText}>   <Icon name='map-marker' size={15} style={{ marginRight:5, color: "black" }}/> Location: {this.props.location.name}</Text>
         <Text style={styles.iconText}>   <Ionicons name='md-pricetags' size={13} style={{ marginLeft:3, color: "black" }}/> Price: {this.props.price}</Text>
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
  viewContainer: {
    paddingVertical: 8,
  },
  eventsStory: {
    marginHorizontal: 8,
    marginVertical: 4,
    flex: 1, flexDirection: 'row',
    minHeight: 90,
    padding: 8,
    backgroundColor: Colors.ListBackground,
    shadowColor: 'black',
    elevation: 1,
  },
  storyText: {
    flex: 1, flexDirection: 'column',
    paddingLeft: 2
  },
  eventsTitle: {
    marginTop: 5,
    paddingTop: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
  },
  iconText: {
    color: "gray",
    fontSize: 12
  },
  eventsText:{
    color: 'gray',
    marginLeft: 10,
    fontSize: 12,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5
  },
  eventsList:{
    width: '100%',
  },
});
