/**
  Location page, show the users current locations and locations for events and games 
**/

import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker,AnimatedRegion } from 'react-native-maps'
import Factory from '../database/Factory';
import {
  StyleSheet,
  View,
  PermissionsAndroid
} from 'react-native';
import {Colors} from '../config/UIConfig';

const DEFAULT_LAT_DELTA =0.0922;
const DEFAULT_LONG_DELTA = 0.0421;

class Near_By_page extends Component{
  constructor(props) {
    super(props);
    this.state= {
      // Change for town in which to hold cup
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: DEFAULT_LAT_DELTA,
        longitudeDelta: DEFAULT_LONG_DELTA,
      },
      eventsFactory: Factory.getEventsInstance(),
      events: [],
    }
  }
  // Once the component has launched, fetch the events and the current location of the user. 
  componentDidMount() {
    this.state.eventsFactory.getEvents().then((events) => {
      console.log("Successfully fetched events to the map view. ")
      this.setState({events: events})
    })
    getCurrentLocation().then(position => {
        if(position) {
          console.log("Successfully fetched the user position")
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: DEFAULT_LAT_DELTA,
              longitudeDelta: DEFAULT_LONG_DELTA,
          },
          })
        } else {
          console.log("Unable to fetch the users location.")
        }

    })
  }
  render() {
      return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onRegionChange={this.onRegionChange}
          region={this.state.region}
          showsUserLocation = {true}
          showsMyLocationButton={true}


        >
        {this.state.events.map(event => (
          <Marker 
            coordinate={event.location}
            title={event.title}
            description={event.text.substring(0.50) + '...'}
            pinColor={Colors.DefaultMapPinColor}
            />
          ))}

        </MapView>
        </View>
      );
    }



  }

  export default Near_By_page;

// Returns the current location of the user. 
const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e));
  });
};

  const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  });
