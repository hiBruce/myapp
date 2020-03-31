
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import SortableGrid from 'react-native-sortable-grid'

export default class basicExample extends Component {

  constructor() {
    super()
    this.numbers = [0,1,2,3,4,5,6,7,8,9]
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  randomRGB = () => 160 + Math.random()*85

  startDelete = () => {
    console.log(
      this.refs.SortableGrid.toggleDeleteMode()
    )
  }

  render() {
    return (
      <View>
        <SortableGrid
          blockTransitionDuration      = { 400 }
          activeBlockCenteringDuration = { 200 }
          itemsPerRow                  = { 10 }
          dragActivationTreshold       = { 200 }
          onDragRelease                = { (itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder) }
          onDragStart                  = { ()          => console.log("Some block is being dragged now!") }
          onDeleteItem                 = { (item)      => console.log("Item was deleted:", item) }
          ref={'SortableGrid'}
        >
          {
            this.numbers.map( (letter, index) =>
              <View
                ref={ 'itemref_' + index }
                onTap={ this.startDelete }
                key={ index }
                style={[
                  styles.block,
                  { backgroundColor: this.getColor() }
                ]}
              >
                <Text style={{color: 'white', fontSize: 45}}>{letter}</Text>
              </View>
            )
          }
        </SortableGrid>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
