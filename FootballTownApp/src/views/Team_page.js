import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Picker,
  Button
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors, Fonts} from '../config/UIConfig';
import {GlobalStyles, PromptStyles} from '../config/UIStyleSheet';
import { Table, Row, Rows } from 'react-native-table-component';
import Factory from '../database/Factory';



const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const screenWidth = dimensions.width;



export default class Team_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      page: 1,
      errors: null,
      refreshing: false,
      user: Factory.getUserInstance(),
      teams: Factory.getTeamsInstance(),
      fetchedTeam: {},
      tableHead: ['Position', 'Wins', 'Draws', 'Losses', 'Points'],
      tableData: [[]]

    };
    console.log(this.props)
  }

  componentDidMount(){
    this.setState({loading: true})
    this.getData()

    this.state.teams.getTeams().then((teams) => {
      var pickerItems = []
      var fetchedTeams = []
      for (const UID in teams) {
        const items = <Picker.Item label={teams[UID].name} value={UID} />
        pickerItems.push(items)
        fetchedTeams.push(teams[UID])
      }
      this.setState({
        fetchedTeams: fetchedTeams,
        pickerItems: pickerItems,
      })
    })
  }

  getData(){
    Factory.getUserInstance().getFollowingTeam().then((team) => {
      const tableData = []
      const insideData = [team.rank, team.wins, team.draws, team.losses, team.points]
      tableData.push(insideData)
      this.setState({
        loading: false,
        fetchedTeam: team,
        tableData: tableData
      })
    })
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  render() {
    const state = this.state;
    return (
      <ScrollView>
        <Image
        style={{width: screenWidth, height: imageHeight}}
        source={{uri: this.state.fetchedTeam.headerImage}}/>

          <View style={styles.team}>
          <Image
          style={styles.flagStyle}
          source={{uri: this.state.fetchedTeam.flag}}/>
          <Text style={styles.teamTitle}>{this.state.fetchedTeam.name}</Text>
          </View>
          <View style={styles.container}>
          <Table borderStyle={{borderWidth: 0.5, borderColor: 'black'}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
            <Rows data={state.tableData} textStyle={styles.text}/>
          </Table>
          </View>

          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.text}>{this.state.fetchedTeam.text}</Text>
          </View>
          <View style={PromptStyles.box}>
            <Text style={PromptStyles.title}>Change Team</Text>
            <View style={PromptStyles.pickerContainer}>
              <Picker
                selectedValue={this.state.selectedTeam}
                style={PromptStyles.picker}
                onValueChange={(itemValue, itemIndex) => this.setState({selectedTeam: itemValue})}>
                {this.state.pickerItems}
              </Picker>
            </View>
            <View style={PromptStyles.buttonContainer}>
              <Button style={PromptStyles.button} color={Colors.Primary} title={"Change"} onPress = {this.onPress} />
            </View>
          </View>
      </ScrollView>
    )
  }

  onPress = () => {
    console.log(this.state.fetchedTeams[this.state.selectedTeam].id)
    Factory.getUserInstance().setFollowingTeam(this.state.fetchedTeams[this.state.selectedTeam].id)
    this.getData()
  }



}

const styles = StyleSheet.create({
  container: { flex: 1,
    padding: 10,
    paddingTop: 10,

        },
  head: {
     height: 40,
     backgroundColor: '#607D8B',
        },
  text: {
    margin: 6,
    textAlign: 'center',
    color: 'black'
  },
  team: {
    flex: 0.3,
    flexDirection: 'row',
    height: 50,
    display: 'flex',
    margin: 10,
    justifyContent: 'center',
  },
  textHead:{
    margin: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  teamTitle:{
      color: Colors.PrimaryText,
      fontFamily: Fonts.Default,
      fontSize: 36,
      fontWeight: '400',
      justifyContent: 'center',
  },
  flagStyle:{
    alignItems: 'flex-start',
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
