/**
  Location page, show yourt current locations and locations for events and games 
**/

import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker,AnimatedRegion } from 'react-native-maps'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid
} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
const DEFAULT_LAT_DELTA =0.0922;
const DEFAULT_LONG_DELTA = 0.0421;
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
      markers: [{key: 1,
        latlng: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: DEFAULT_LAT_DELTA,
        longitudeDelta: DEFAULT_LONG_DELTA,
      },
        title: "Yolo",
        description: "I like cake",
        pinColor: "#FF69B4",

      }] // List of interesting places. 
    }
  }
  componentDidMount() {
    return getCurrentLocation().then(position => {
        if(position) {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: DEFAULT_LAT_DELTA,
              longitudeDelta: DEFAULT_LONG_DELTA,
          },
          })
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
        {this.state.markers.map(marker => (
          <Marker 
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            pinColor={marker.pinColor}
            />
          ))}

        </MapView>
        </View>
      );
    }



  }

  export default Near_By_page;

  export const setRegion = (position) => {
    this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: DEFAULT_LAT_DELTA,
              longitudeDelta: DEFAULT_LONG_DELTA,
          },
        })
  }

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
