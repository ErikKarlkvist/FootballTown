import {StyleSheet} from 'react-native';
import {Colors, Fonts} from './UIConfig.js';

export const GlobalStyles = StyleSheet.create({

  title: {
    color: Colors.PrimaryText,
    fontFamily: Fonts.Default,
    fontSize: 45,
    fontWeight: '400',
    textAlign: 'left',
  },
  ingress: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.PrimaryText,
    fontFamily: Fonts.Body,
    marginTop: 16,
  },
  text: {
    fontSize: 15,
    color: Colors.PrimaryText,
    fontFamily: Fonts.Body,
    marginTop: 16,
  },
  articleContainer: {
    padding: 14,
  },

});
