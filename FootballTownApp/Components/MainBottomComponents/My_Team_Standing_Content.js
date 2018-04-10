

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { Table, TableWrapper, Row,Rows } from 'react-native-table-component';
import {
StackNavigator
}from 'react-navigation'
 class My_Team_Standing_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No','Team', 'P', 'G', 'PTs', 'Head5'],
      widthArr: [120, 60, 80, 100, 80],
      tableData: [
              ['5','Team A', '26', '37', '45']
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
         <Text style={styles.instructions}>
                Team players:
           </Text>
           <Text style={styles.instructions}>
                  Total Red Cards:
            </Text>
            <Text style={styles.instructions}>
                 Total yello Cards:
             </Text>
             <Text style={styles.instructions}>
                   Half Time Score:
              </Text>
              <Text style={styles.instructions}>
                    Ful Time Score:'...'

               </Text>
      </View>
    );
  }
}

 export default My_Team_Standing_Content;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginTop: -1,
      fontSize: 17,
    },
});