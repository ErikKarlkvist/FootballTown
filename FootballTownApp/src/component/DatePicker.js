/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  DatePickerAndroid,
  TimePickerAndroid,
  DatePickerIOS,
  TouchableOpacity
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {Colors, Fonts} from "../config/UIConfig"

class DatePicker extends Component{
  constructor(props){
    super(props);

  }

  render() {
    if(Platform.OS === "ios"){
      return (
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          {Platform.OS === "ios" && <DatePickerIOS
            date={this.props.date}
            onDateChange={this.props.onDateChange}
          />}
          {Platform.OS === "android" && <DatePickerAndroid
            date={this.props.date}
            onDateChange={this.props.onDateChange}/>
          }
          <View style={styles.underline}/>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, this.props.style]}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <TouchableOpacity style={styles.androidClicker} onPress={this.openAndroidDialog}><Text>{this.props.date.toString()}</Text></TouchableOpacity>
          <View style={styles.underline}/>
        </View>
      )
    }
  }

  openAndroidDialog = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: this.props.date
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        let newDate = new Date(year, month, day).getTime()
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: 12,
          minute: 0,
          is24Hour: true,
        });
        if (action !== TimePickerAndroid.dismissedAction) {
          // Selected hour (0-23), minute (0-59)
          newDate = newDate + hour*1000*60*60 + minute*1000*60
          this.props.onDateChange(new Date(newDate))
        }
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

}



export default DatePicker;


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: Colors.backgroundColor
    },
    title: {
      fontSize: 12,
      color: Colors.Primary,
      fontFamily: Fonts.Body
    },
    underline: {
      borderBottomWidth: 1,
      borderColor: Colors.PrimaryText
    },
    androidClicker: {
      height: 50,
      width: "100%",
      justifyContent: "center"
    }

  });
