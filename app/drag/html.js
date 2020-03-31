import React, { PureComponent, Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PanResponder,
    NativeModules
} from 'react-native';

export default class TouchStartAndRelease extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'red',
            marginTop: 100,
            marginLeft: 100,
            data: [
                'a',
                'b',
                'c'
            ],
            index: -1,
            dataX: []
        };
        this.lastX = this.state.marginLeft;
        this.lastY = this.state.marginTop;
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                this._highlight();
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log(`gestureState.dx : ${gestureState.dx}   gestureState.dy : ${gestureState.dy}`);
                this.setState({
                    marginLeft: this.lastX + gestureState.dx,
                    marginTop: this.lastY + gestureState.dy,
                });
            },
            onPanResponderRelease: (evt, gestureState) => {
                this._unhighlight();
                this.lastX = this.state.marginLeft;
                this.lastY = this.state.marginTop;
                for (i = 0; i < this.state.dataX.length; i++) {
                    if (this.lastX > this.state.dataX[i] && this.lastX < this.state.dataX[i + 1]) {
                        console.log(`============ : ${i}`)
                        this.setState({
                            index: i
                        })
                    }
                }

                // splice(position, numberOfItemsToRemove, item)
                // 拼接函数(索引位置, 要删除元素的数量, 元素)
                this.state.data.splice(this.state.index, 0, 'aaaaaaaa')

                for (i = 0; i < this.state.data.length; i++) {
                    console.log(`============ : ${this.state.data[i]}`)
                }

                this.setState({
                    data: this.state.data
                })
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });
    }

    _onLayout = (e) => {
        NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
            console.log(`gestureState.dx : ${pageX}   gestureState.dy : ${pageY}  width : ${width}  height : ${height}`);
            this.state.dataX.push(pageX)
        })
    }

    _unhighlight() {
        this.setState({
            backgroundColor: 'red',
        });
    }

    _highlight() {
        this.setState({
            backgroundColor: 'blue',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    {
                        this.state.data.map((item, index) => {
                            return <Text style={[styles.redView,
                            {
                                backgroundColor: this.state.backgroundColor,
                                textAlign: 'center',
                                margin: 10,
                            }
                            ]} key={index} onLayout={this._onLayout}>{item}</Text>
                        })
                    }
                </View>
                <View style={[styles.redView,
                {
                    backgroundColor: 'green',
                    marginTop: this.state.marginTop,
                    marginLeft: this.state.marginLeft,
                }
                ]}
                    {...this._panResponder.panHandlers}
                ></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    redView: {
        width: 100,
        height: 100,
    },

});

AppRegistry.registerComponent('TouchStartAndRelease', () => TouchStartAndRelease);