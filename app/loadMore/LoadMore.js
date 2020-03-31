import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoadMoreFlatList from './LoadMoreFlatList'
let i = 0;
export default class LoadMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        };
    }
    header() {
        var view = (<View><Text>aaaaaaaaaaaaaa</Text></View>)
        return view
    }
    renderItemView(item, index) {
        var view = (<View><Text>{item}</Text></View>)
        return view
    }
    _createEmptyView() {
        var view = (<View><Text>暂无数据</Text></View>)
        return view
    }
    _onEndReached = () => {
        let tmp = ['123', '1343', '142', '13435r', 'erutr93', 'd0e9wufo9']
        setTimeout(() => {
            if (i > 5) {
                this.setState({
                    data: this.state.data.concat([])
                });
            } else {
                this.setState({
                    data: this.state.data.concat(tmp)
                });
                i++;
            }
        }, 1000);
    }
    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LoadMoreFlatList
                    data={this.state.data}
                    renderItemView={({ item, index }) => this.renderItemView(item, index)}
                    headerView={this.header}
                    emptyView={this._createEmptyView}
                    endReached={this._onEndReached}
                // endReached={this._onEndReached.bind(this)}//如果不加bind会报错见：https://www.jianshu.com/p/94fc8c1871c0
                />
            </View>
        );
    }
}