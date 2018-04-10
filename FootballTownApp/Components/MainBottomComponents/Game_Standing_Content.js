
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
import {
StackNavigator
}from 'react-navigation'
 class Game_Standing_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Team', 'P', 'G', 'PTs', 'Head5'],
      widthArr: [120, 60, 80, 100, 80],
      tableData: [
              ['Team A', '26', '37', '45'],
              ['Team B', '21', '32', '42'],
              ['Team C', '22', '30', '41'],
              ['Team D', '20', '31', '40'],
              ['Team E', '21', '30', '39'],
              ['Team F', '12', '23', '35'],
              ['Team G', '29', '24', '32'],
              ['Team H', '22', '27', '30']
            ]
    }
  }

  render() {
    const state = this.state;
    /*const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      /*const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }

      rowData = ["Team A","Team B","Team C","Team D","Team E","Team F","Team G","Team H"];
      tableData.push(rowData[i]);
    }
*/
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>

            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                   <Rows data={state.tableData}
                     widthArr={state.widthArr}
                      style={[styles.row && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />

                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

 export default Game_Standing_Content;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});