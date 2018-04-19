import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons'
//MaterialIcons'
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles} from '../config/UIStyleSheet';



  title = 'Arsenal beat United'
  ingress = 'Lorem ipsum dolor sit amet, ex per iriure appareat, ei usu fugit omnesque assueverit, ne amet legendos mnesarchum sit. Doctus reformidans intellegebat at sea, dolor animal te vim. In eum dicam utinam fabulas, in facilisi democritum vituperatoribus eam. Est in agam dicant convenire. Per ei persius suscipit, nec abhorreant moderatius an. Cibo dolor aliquando vel eu.'
  text = 'Eligendi deserunt mea at, vel ne patrioque consequat. Mel ne audiam mnesarchum adversarium, adhuc eleifend ullamcorper ex mei. Et aeque volumus epicuri ius, an odio feugiat rationibus has, movet iriure quaestio id mea. Liber eripuit mnesarchum et usu.Cu ius quot possim quaerendum. Mea dicam laboramus eu, nobis temporibus ex per, vel ea deserunt splendide. Ad facer essent disputationi sed, ius nihil omnes ea, est iisque forensibus efficiantur cu. Dicit congue placerat no eam. Mei ex decore volumus. Mundi dolores sensibus qui ne, at wisi partem vel. Vix audiam apeirian ex. Ea his sint homero sapientem, vim dicant inermis dignissim ut, eu qui tation consetetur conclusionemque. Soleat audiam perfecto id nam, ex ius fastidii luptatum singulis, ea aliquam fastidii menandri eum. Vix copiosae moderatius efficiendi ex, has eu melius scaevola adversarium. Et quodsi delicatissimi duo. Velit ponderum sea no. Cu epicurei sadipscing qui. Nobis tation animal per ut.'
  uri = 'https://www.thesun.co.uk/wp-content/uploads/2017/07/nintchdbpict000342293828.jpg?strip=all&w=960&quality=100';

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const screenWidth = dimensions.width;


class News_page extends Component{

  constructor(props){
    super(props);
  }

  render() {
      return (
        <ScrollView>
          <Image
            style={{width: screenWidth, height: imageHeight}}
            source={{uri: uri}}
          />
          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.title}>{title}</Text>
            <Text style={GlobalStyles.ingress}>{ingress}</Text>
            <Text style={GlobalStyles.text}>{text}</Text>
          </View>
        </ScrollView>
      );
    }
  }

  export default News_page;
