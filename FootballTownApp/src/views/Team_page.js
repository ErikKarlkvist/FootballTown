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
import Loader from '../views/Loader';



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
      selectedTeam: 0,
      tableHead: ['Pos', 'Wins', 'Draws', 'Losses', 'Points'],
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
    if(this.state.loading){
      return (
        <Loader/>
      );
    } else {
    return (
      <ScrollView style={GlobalStyles.articleScrollView}>
        <Image
        style={{width: screenWidth, height: imageHeight}}
        source={{uri: this.state.fetchedTeam.headerImage}}/>

          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
              resizeMode="contain"
              style={styles.logo}
              source={{uri: this.state.fetchedTeam.flag}}/>
            </View>
            <View style={styles.teamNameContainer}>
              <Text style={styles.teamName}>{this.state.fetchedTeam.name}</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
          <Table borderStyle={{borderWidth: 0}}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
            <Rows data={state.tableData} textStyle={styles.stats}/>
          </Table>
          </View>

          <View style={GlobalStyles.articleContainer}>
            <Text style={GlobalStyles.text}>{this.state.fetchedTeam.text}</Text>
          </View>

          <View style={styles.changeTeamContainer}>
            <Text style={GlobalStyles.subtitle}>Change Team</Text>
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
  }
  onPress = () => {
    console.log(this.state.fetchedTeams[this.state.selectedTeam].id)
    Factory.getUserInstance().setFollowingTeam(this.state.fetchedTeams[this.state.selectedTeam].id)
    this.getData()
  }



}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
  teamNameContainer: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    padding: 8,
    justifyContent: 'flex-start',
  },
  teamName:{
    color: Colors.PrimaryText,
    fontFamily: Fonts.Default,
    fontSize: 36,
    fontWeight: '400',
    justifyContent: 'flex-start',
},
logo:{
  height: undefined,
  width: undefined,
  flex: 1,
},
  logoContainer: {
    width: 72,
    padding: 8,
    justifyContent: 'center',
  },
  statsContainer: { flex: 1,
    padding: 10,
    paddingTop: 10,
  },
  stats: {
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontSize: 20,
    flexDirection: 'row',
  },
  textHead:{
    fontWeight: 'normal',
    textAlign: 'center',
    color: Colors.Primary,
  },
  changeTeamContainer : {
    borderTopColor: Colors.PrimaryLight,
    borderTopWidth: 1,
    margin: 16,
    paddingTop: 16,
  },
});
