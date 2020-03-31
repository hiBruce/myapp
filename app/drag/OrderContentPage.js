import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, PanResponder, PixelRatio, Dimensions } from 'react-native';
const dp2px = dp=>PixelRatio.getPixelSizeForLayoutSize(dp);
const px2dp = px=>PixelRatio.roundToNearestPixel(px);
const { height, width } = Dimensions.get("window");
export default class OrderContentPage extends Component {
    constructor(props) {
        super(props);
        this.names = ['Android', 'iOS', '前端', '拓展资源', '休息视频'];
        this.items = [];
        this.order = [];
    }

    render() {
        return (
            <View style={styles.container}>
                {this.names.map((item, i) => {
                    // this.order.push(item);
                    return (
                        <View
                            {...this._panResponder.panHandlers}
                            ref={(ref) => this.items[i] = ref}
                            key={i}
                            style={[styles.item, { top: (i + 1) * 49 }]}>
                            <Text style={styles.itemTitle}>{item}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                const { pageY, locationY } = evt.nativeEvent;
                this.index = this._getIdByPosition(pageY);
                this.preY = pageY - locationY;
                //get the taped item and highlight it
                let item = this.items[this.index];
                item.setNativeProps({
                    style: {
                        shadowColor: "#000",
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        shadowOffset: { height: 0, width: 2 },
                        elevation: 5
                    }
                });
            },
            onPanResponderMove: (evt, gestureState) => {
                let top = this.preY + gestureState.dy;
                let item = this.items[this.index];
                item.setNativeProps({
                    style: { top: top }
                });

                let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY);
                if (collideIndex !== this.index && collideIndex !== -1) {
                    let collideItem = this.items[collideIndex];
                    collideItem.setNativeProps({
                        style: { top: this._getTopValueYById(this.index) }
                    });
                    //swap two values
                    [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
                    [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]];
                    this.index = collideIndex;
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                const shadowStyle = {
                    shadowColor: "#000",
                    shadowOpacity: 0,
                    shadowRadius: 0,
                    shadowOffset: { height: 0, width: 0, },
                    elevation: 0
                };
                let item = this.items[this.index];
                //go back the correct position
                item.setNativeProps({
                    style: { ...shadowStyle, top: this._getTopValueYById(this.index) }
                });
                console.log(this.order);
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
            }
        });
    }

    _getIdByPosition(pageY) {
        var id = -1;
        const height = px2dp(49);

        if (pageY >= height && pageY < height * 2)
            id = 0;
        else if (pageY >= height * 2 && pageY < height * 3)
            id = 1;
        else if (pageY >= height * 3 && pageY < height * 4)
            id = 2;
        else if (pageY >= height * 4 && pageY < height * 5)
            id = 3;
        else if (pageY >= height * 5 && pageY < height * 6)
            id = 4;

        return id;
    }

    _getTopValueYById(id) {
        const height = px2dp(49);
        return (id + 1) * height;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff'
    },
    item: {
        // flexDirection: 'row',
        height: px2dp(49),
        // width: width,
        alignItems: 'center',
        backgroundColor: '#ff0',
        paddingLeft: px2dp(20),
        // position: 'absolute',
    },
    itemTitle: {
        fontSize: px2dp(15),
        color: '#000',
        marginLeft: px2dp(20)
    }
});