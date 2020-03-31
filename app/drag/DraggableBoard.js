import { RowRepository, Board } from 'react-native-draggable-board';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DraggableBoard extends Component {
  constructor(props) {
    super(props);

    const data = [
      {
        id: 1,
        name: 'Column1',
        rows: [
          { id: 1, name: 'Item1' },
          { id: 2, name: 'Item2' },
          { id: 3, name: 'Item3' },
          { id: 4, name: 'Item4' },
          { id: 5, name: 'Item5' },
          { id: 6, name: 'Item6' },
          { id: 7, name: 'Item7' },
          { id: 8, name: 'Item8' },
          { id: 9, name: 'Item9' },
        ]
      },
      {
        id: 2,
        name: 'Column2',
        rows: [
          { id: 10, name: 'Item10' }
        ]
      }
    ];
    this.state = { rowRepository: new RowRepository(data) };
  }

  render() {
    return (
      <Board
        style={styles.board}
        rowRepository={this.state.rowRepository}
        renderRow={this.renderRow.bind(this)}
        renderColumnWrapper={this.renderColumnWrapper.bind(this)}
        open={this.onOpen.bind(this)}
        onDragEnd={this.onDragEnd.bind(this)}
      />
    );
  }

  renderRow(item) {
    let style = [styles.item];
    // Just to show that other sizes works as well
    // if (item.id == 2) {
    //   style.push({ height: 100 });
    // }
    return (
      <View style={style}><Text>{item.name}</Text></View>
    )
  }

  renderColumnWrapper(column, index, columnComponent) {
    return (
      <View key={`column-${index}`}>
        <Text>{column.name}</Text>
        {columnComponent}
      </View>
    );
  }

  onOpen(item) {
    console.log('Opened!', item);
  }

  onDragEnd(srcColumnId, destColumnId, item) {
    console.log(`Dragged item ${item.id()} from column ${srcColumnId} to column ${destColumnId}`);
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    padding: 15,
    backgroundColor: '#63A2B8',
  },
  column: {
    flexDirection:'row'
  },
  columnHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    alignSelf: 'center'
  },
  item: {
    flex: 1,
    margin: 5,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#63A2B8',
    borderRadius: 5
  }
});