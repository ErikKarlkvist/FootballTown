
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
//MaterialIcons'
import {TabNavigator} from 'react-navigation';

class Near_By_page extends Component{
  constructor(props) {
    super(props);
    this.state= {
      // Change for town in which to hold cup
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [] // List of interesting places. 
    }
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

        >
        {this.state.markers.map(marker => (
          <Marker 
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            />
          ))}

        </MapView>
        </View>
      );
    }

  changeRegion(region) {
    this.setState({region})
  }
  }

  export default Near_By_page;


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
