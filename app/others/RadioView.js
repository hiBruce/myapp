import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class RadioView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgc: '#0085D0',
        }
    }

    pressed() {
        let { id, onCheck } = this.props;
        onCheck(id);
    }

    render() {

        let color = this.props.checked ? this.state.bgc : '#fff';

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={this.pressed.bind(this)}>
                    <View style={{ backgroundColor: color, width: 20, height: 20, borderRadius: 50, borderColor: '#d9d9d9', borderWidth: 1 }}>
                    </View>
                    <Text style={{ color: '#999', marginHorizontal: 5, fontSize: 18 }}>{this.props.option}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}