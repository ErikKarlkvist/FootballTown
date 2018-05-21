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
  subtitle: {
    color: Colors.PrimaryText,
    fontFamily: Fonts.Default,
    fontSize: 25,
    fontWeight: '300',
    textAlign: 'left',
    marginBottom: 10,
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
    padding: 16,
    flex: 1,
  },

  articleScrollView:{
    backgroundColor: Colors.ArticleBackground,
  },

});

export const PromptStyles = StyleSheet.create({

  title: {
    color: Colors.PrimaryText,
    fontFamily: Fonts.Default,
    fontSize: 28,
    fontWeight: '400',
    textAlign: 'left',
    alignSelf:'flex-start'
  },
  button: {
    paddingLeft: 80,
  },
  buttonContainer: {
    alignSelf:'flex-end',
    width: '50%',
  },
  pickerContainer: {
    backgroundColor:'rgba(255,255,255,0.8)',
    elevation: 1,
    width: '100%',
    marginTop:16,
    marginBottom:16,
    padding:4,

  },
  picker: {
    height: 50,
    width: '100%',
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 8,
    padding: 8, 
    marginTop: 'auto',
    marginBottom:'auto',
    backgroundColor:'rgba(255,255,255,0.8)',
  },
  page: {
    flex: 1,
  }
});
