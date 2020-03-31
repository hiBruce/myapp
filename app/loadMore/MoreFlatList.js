import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class MoreFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            showFoot: 2
        };
    }

    renderItemView(item, index) {
        return (<View><Text>{item}</Text></View>)
    }

    /**
     * 加载底部视图
     */
    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        我是有底线的
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        加载更多
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 0) {
            return (
                <View>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached() {
        let tmp = ['123', '1343', '142', '13435r', 'erutr93', 'd0e9wufo9']
        setTimeout(() => {
            this.setState({
                showFoot:2,
            });
        }, 1000);
        this.setState({
            showFoot:0,
            data:this.state.data.concat(tmp)
        });
    }
    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    render() {
        return (
            <View style={{ flex:1}}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index }) => this.renderItemView(item, index)}
                    // ListHeaderComponent={this.headerView}
                    // ListEmptyComponent={this.emptyView}
                    ListFooterComponent={this._renderFooter.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={0.5}
                    ItemSeparatorComponent={this._separator}
                />
            </View>
        );
    }
}
