import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native'
import SortableGrid from 'react-native-sortable-grid'

export default class basicExample extends Component {
    constructor() {
        super()
        this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }

    render() {
        return (
            <SortableGrid
                style={{ flex: 1, flexDirection: 'row'}}
                // blockTransitionDuration={400}
                // activeBlockCenteringDuration={200}
                itemsPerRow={10}
                // dragActivationTreshold={200}
                onDragRelease={(itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder)}
                onDragStart={() => console.log("Some block is being dragged now!")}>
                {
                    // this.alphabets.map((letter, index) =>
                    this.props.data.map((letter, index) =>
                        <View key={index} style={styles.block}>
                            <Image source={require('./../../imgs/servicequest.png')} />
                            <Text style={{ color: '#333', fontSize: 18 }}>{letter}</Text>
                        </View>
                    )
                }
            </SortableGrid>
        )
    }

}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});