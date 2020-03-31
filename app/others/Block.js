import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  PanResponder,
  Image,
  View
} from 'react-native'

export default class Block extends Component {
    render = () =>
        <Animated.View
            onLayout={this.props.onLayout}
            {...this.props.panHandlers}
        >
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                delayLongPress={this.props.delayLongPress}
                onLongPress={this.props.onLongPress}
                onPress={this.props.onPress}>

                <View style={styles.itemImageContainer}>
                    <View style={this.props.itemWrapperStyle}>
                        {this.props.children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
}