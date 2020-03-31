import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import CountDown from './countDown';
import AddCountTime from './AddCountTime';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnd: false
        }
    }
    componentDidMount() {
        console.log('now========', (this.format(Date.parse(new Date) + 5 * 60 * 1000, 'yyyy-MM-dd HH:mm:ss')));
        console.log('end========', new Date());
    }

    format(time, format) {
        var t = new Date(time);
        var tf = function (i) { return (i < 10 ? '0' : '') + i };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    disabled={this.state.isEnd}
                    onPress={() => {
                        alert('抢单');
                    }}>
                    <View style={{
                        backgroundColor: this.state.isEnd ? '#666666' : '#008BCA',
                        borderRadius: 5,
                        margin: 20,
                        padding: 12,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            lineHeight: 17,
                            marginRight: 5
                        }}>抢单</Text>
                        <CountDown
                            date={(this.format(Date.parse(new Date) + 1 * 60 * 1000, 'yyyy-MM-dd HH:mm:ss'))}
                            days={{ plural: '天 ', singular: '天 ' }}
                            hours=':'
                            mins=':'
                            segs=''
                            // tip='还剩'
                            daysStyle={styles.time}
                            hoursStyle={styles.time}
                            minsStyle={styles.time}
                            secsStyle={styles.time}
                            firstColonStyle={styles.colon}
                            secondColonStyle={styles.colon}
                            tipStyle={styles.tip}
                            onEnd={() => {
                                this.setState({
                                    // isEnd: true
                                })
                            }}
                        />
                        <AddCountTime
                            isAdd={false}
                            date={Date.parse(new Date)+60*1000}
                            onEnd={() => {
                                this.setState({
                                    isEnd: true
                                })
                            }} />

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    //时间文字
    time: {
        paddingHorizontal: 2,
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        lineHeight: 17,
    },
    //冒号
    colon: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        lineHeight: 17,
    },
    tip: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 17
    }
});

// function mapStateToProps(state) {
//     return {};
// }

// function mapDispatchToProps(dispatch) {
//     return {};
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Demo);