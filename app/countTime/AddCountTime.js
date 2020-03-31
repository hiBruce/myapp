import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
export default class AddCountTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.showtime(this.props.date)
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = this.showtime(this.props.date);
            if (date) {
                this.setState({
                    date: date + ''
                });
            } else {
                this.setState({
                    date: '00:00:00'
                });
                this.stop();
                this.props.onEnd();
            }
        }, 1000);
    }
    componentWillMount() {
        const date = this.showtime(this.props.date);
        if (date) {
            this.setState({
                date: date + ''
            });
        }
    }
    stop() {
        clearInterval(this.interval);
    }
    componentWillUnmount() {
        this.stop();
    }
    getMiao(time) {
        let miao = time % 60 + '';
        if (miao.length == 1) {
            miao = '0' + miao;
        }
        return miao;

    }
    getFen(time) {
        let fen = time / 60 + '';
        if (fen < 10) {
            fen = '0' + fen;
        }
        return fen.substr(0, 2);
    }
    getHour(time) {

        let result = time / 3600 + '';
        if (result < 10) {
            return '0' + result.substr(0, 1);
        } else {
            return result.substr(0, 2);
        }
    }
    showtime(start) {
        console.log('start', start);
        console.log('end', Date.parse(new Date));
        let time;
        if (this.props.isAdd) {
            time = (Date.parse(new Date) - start) / 1000;
        } else {
            time = (start - Date.parse(new Date)) / 1000;
        }
        console.log('end', time);
        if (time <= 0) {
            return false;
            // return '00:00:00';
        }
        let result = '';
        if (time < 60) {
            if (time < 10) {
                result = '00:00:0' + time
            } else {
                result = '00:00:' + time
            }
        } else if (time < 3600) {
            let fen = this.getFen(time);
            let miao = this.getMiao(time);
            result = '00:' + fen + ':' + miao;
        } else {  // 超过1小时
            let hour = this.getHour(time);
            let fen = this.getFen(time % 3600);
            let miao = this.getMiao(time % 3600 % 60);
            result = hour + ':' + fen + ':' + miao;
        }
        return result;
    }

    formatDate(value) {
        var secondTime = parseInt(value);// 秒
        var minuteTime = 0;// 分
        var hourTime = 0;// 时
        if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
            //获取分钟，除以60取整数，得到整数分钟
            minuteTime = parseInt(secondTime / 60);
            //获取秒数，秒数取佘，得到整数秒数
            secondTime = parseInt(secondTime % 60);
            //如果分钟大于60，将分钟转换成小时
            if (minuteTime > 60) {
                //获取小时，获取分钟除以60，得到整数小时
                hourTime = parseInt(minuteTime / 60);
                //获取小时后取佘的分，获取分钟除以60取佘的分
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        var result = "" + parseInt(secondTime) + "秒";
        if (minuteTime > 0) {
            result = "" + parseInt(minuteTime) + "分" + result;
        }
        if (hourTime > 0) {
            result = "" + parseInt(hourTime) + "小时" + result;
        }
        return result;
    }

    render() {
        return (
            <View>
                <Text>{this.state.date}</Text>
                {/* <Text>{this.formatDate(61)}</Text> */}
            </View>
        );
    }
}
