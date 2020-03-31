import React, { Component } from 'react';
import { View, Text, Animated, } from 'react-native';
import Dragger from './basicExample'
export default class indexDragger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDragWiggle: new Animated.Value(0),
            data: ['业务受理', '业务受理', '业务受理', '业务受理', '业务受理', '业务受理', '业务受理', '业务受理', '业务受理', '业务受理']
        };
    }

    _defaultDragActivationWiggle = () => {
        this.state.startDragWiggle.setValue(20)
        Animated.spring(this.state.startDragWiggle, {
            toValue: 0,
            velocity: 2000,
            tension: 2000,
            friction: 5
        }).start()
    }

    render() {
        return (
            <Animated.View
                style={{ flex: 1}}>
                <Text
                    onLongPress={() => this._defaultDragActivationWiggle()}
                    style={{ color: '#333', fontSize: 18 }}>常用</Text>
                <Dragger data={this.state.data} />
            </Animated.View>
        );
    }
}
